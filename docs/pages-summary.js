import fs from 'fs';

const dirs = [
    "508-cns-data",
    "508-dhs-data",
    "508-doc-data",
    //"508-dod-data",
    "508-doe-data",
    "508-doi-data",
    "508-doj-data",
    "508-dol-data",
    "508-dot-data",
    "508-ed-data",
    "508-eeoc-data",
    "508-epa-data",
    "508-fcc-data",
    "508-fdic-data",
    "508-gsa-data",
    "508-hhs-data",
    "508-hud-data",
    "508-nara-data",
    //"508-nasa-data",
    //"508-ncua-data",
    "508-nrc-data",
    "508-nsf-data",
    "508-opm-data",
    "508-pbgc-data",
    "508-sba-data",
    //"508-sec-data",
    "508-ssa-data",
    "508-state-data",
    "508-treasury-data",
    "508-usab-data",
    "508-usaid-data",
];

let report = new Map();

dirs.forEach((dir) => {
    console.log(dir);
    let pagesFile = `${dir}/pages.json`;
    if (fs.existsSync(pagesFile)) {
        const pages = JSON.parse(fs.readFileSync(pagesFile, 'utf8'));
        pages.forEach((page) => {
            let key = page.date;
            if (report.has(key)) {
                let record = JSON.parse(report.get(key));
                record.pageCount += page.pageCount;
                report.set(key, JSON.stringify(record, null, 2));
            } else {
                let record = {};
                record.pageCount = page.pageCount;
                report.set(key, JSON.stringify(record, null, 2));
            }
        });
    }
});

// write file
try {
    let finalReport = [];
    report.forEach((value, key) => {
        let json = JSON.parse(value);

        let record = {};
        record.date = key;
        record.pageCount = json.pageCount;
        finalReport.push(record);
    });
    console.log(finalReport);
    fs.writeFileSync(`pages-summary.json`, JSON.stringify(finalReport, null, 2));
    console.log(`Wrote: pages-summary.json`);
} catch (err) {
    console.error(err);
}
