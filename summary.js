import Walker from 'walker';
import fs from 'fs';

buildReportDates('mobile');
buildReportDates('desktop');
extractA11yFromLighthouse('mobile');
extractA11yFromLighthouse('desktop');
buildRollupJson('mobile');
buildRollupJson('desktop');

const rules = {
    "aria-allowed-attr": ["4.1.2"],
    "aria-command-name": ["4.1.2"],
    "aria-hidden-body": ["4.1.2"],
    "aria-hidden-focus": ["1.3.1", "4.1.2"],
    "aria-input-field-name": ["4.1.2"],
    "aria-meter-name": ["1.1.1"],
    "aria-progressbar-name": ["1.1.1"],
    "aria-required-attr": ["4.1.2"],
    "aria-required-children": ["1.3.1"],
    "aria-required-parent": ["1.3.1"],
    "aria-roles": ["4.1.2"],
    "aria-toggle-field-name": ["4.1.2"],
    "aria-tooltip-name": ["4.1.2"],
    "aria-valid-attr-value": ["4.1.2"],
    "aria-valid-attr": ["4.1.2"],
    "button-name": ["4.1.2"],
    "bypass": ["2.4.1"],
    "color-contrast": ["1.4.3"],
    "definition-list": ["1.3.1"],
    "document-title": ["2.4.2"],
    "duplicate-id-active": ["4.1.1"],
    "duplicate-id-aria": ["4.1.1"],
    "form-field-multiple-labels": ["3.3.2"],
    "frame-title": ["2.4.1", "4.1.2"],
    "html-has-lang": ["3.1.1"],
    "html-lang-valid": ["3.1.1"],
    "image-alt": ["1.1.1"],
    "input-image-alt": ["1.1.1"],
    "label": ["1.3.1", "4.1.2"],
    "link-name": ["2.4.4", "4.1.2"],
    "list": ["1.3.1"],
    "listitem": ["1.3.1"],
    "meta-refresh": ["2.2.1", "2.2.4", "3.2.5"],
    "object-alt": ["1.1.1"],
    "td-headers-attr": ["1.3.1"],
    "valid-lang": ["3.1.2"],
    "video-caption": ["1.2.2"]
};


function buildReportDates(type) {
    let dates = [];

    Walker(`reports/${type}`)
        .on('dir', (dir, stat) => {
            const dirParts = dir.split('/');
            if (dirParts.length == 3) {
                dates.push(dir);
            }
        })
        .on('end', () => {
            try {
                fs.writeFileSync(`reports/${type}/index.json`, JSON.stringify(dates.sort(), null, 2));
                console.log(`reports/${type}/index.json`);
            } catch (err) {
                console.error(err);
            }
        });
}

function extractA11yFromLighthouse(type) {
    Walker(`reports/${type}`)
        .on('dir', (dir, stat) => {
            const path = `${process.cwd()}/${dir}`;
            let lhFile = `${path}/lighthouse.json`;
            try {
                if (fs.existsSync(lhFile)) {
                    let a11y = [];
                    let errors = [];
                    const lh = JSON.parse(fs.readFileSync(lhFile, 'utf8'));
                    lh.categories.accessibility.auditRefs.forEach((auditRef) => {
                        let audit = lh.audits[auditRef.id];
                        a11y.push(audit);
                        if (audit.score == 0) {
                            audit.errorCount = audit.details.items.length;
                            errors.push(audit);
                        }
                    });
                    fs.writeFileSync(`${path}/a11y.json`, JSON.stringify(a11y, null, 2));
                    fs.writeFileSync(`${path}/a11y-errors.json`, JSON.stringify(errors, null, 2));
                }
            } catch (err) {
                console.error(err)
            }
        })
        .on('end', () => {
            try {

            } catch (err) {
                console.error(err);
            }
        });
}

function buildRollupJson(type) {
    const path = `${process.cwd()}/reports/${type}`;
    const dirs = JSON.parse(fs.readFileSync(`${path}/index.json`, 'utf8'));
    dirs.forEach((dir) => {
        let date = dir.split('/')[2];
        let rollups = [];
        Walker(`reports/${type}/${date}`)
            .on('dir', (dir, stat) => {
                let a11yErrorsFile = `./${dir}/a11y-errors.json`;
                try {
                    if (fs.existsSync(a11yErrorsFile)) {
                        const errors = JSON.parse(fs.readFileSync(a11yErrorsFile, 'utf8'));
                        errors.forEach((auditRef) => {
                            let rollup = {}
                            rollup.id = auditRef.id;
                            rollup.errorCount = auditRef.errorCount;
                            rollups.push(rollup);
                        });
                    }
                } catch (err) {
                    console.error(err)
                }
            })
            .on('end', () => {
                try {
                    // consolidate/sum multiple entries
                    let condensed = new Map();
                    rollups.forEach((it) => {
                        let sum = condensed.get(it.id) || 0;
                        condensed.set(it.id, sum += it.errorCount);
                    });

                    // sort by errorCount, largest to smallest
                    let condensedSorted = new Map([...condensed.entries()].sort((a, b) => b[1] - a[1]));

                    // convert to array
                    // let sorted = Array.from(condensedSorted, ([name, value]) => ({ name, value }));

                    // write to file
                    // fs.writeFileSync(`./reports/${type}/${date}/summary.json`, JSON.stringify(sorted, null, 2));
                    fs.writeFileSync(`./reports/${type}/${date}/errors-summary-lighthouse.json`, JSON.stringify(Object.fromEntries(condensedSorted), null, 2));
                    console.log(`./reports/${type}/${date}/errors-summary-lighthouse.json`);

                    // convert lighthouse to wcag
                    let wcag = new Map();
                    condensed.forEach((value, key, map) => {
                        let scList = rules[key];
                        if (scList) {
                            scList.forEach((sc) => {
                                let sum = wcag.get(sc) || 0;
                                wcag.set(sc, sum += value);
                            });
                        }
                    });

                    // sort by errorCount, largest to smallest
                    let wcagSorted = new Map([...wcag.entries()].sort((a, b) => b[1] - a[1]));

                    // write to file
                    fs.writeFileSync(`./reports/${type}/${date}/errors-summary-wcag.json`, JSON.stringify(Object.fromEntries(wcagSorted), null, 2));
                    console.log(`./reports/${type}/${date}/errors-summary-wcag.json`);

                } catch (err) {
                    console.error(err);
                }
            });
    });
}
