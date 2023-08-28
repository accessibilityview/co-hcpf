import Walker from 'walker';
import fs from 'fs';

buildRollupJson('mobile');

function buildRollupJson(type){
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
                  } catch(err) {
                    console.error(err)
                  }
            })
            .on('end', ()=>{
                try{
                    // consolidate/sum multiple entries
                    let condensed = new Map();
                    rollups.forEach((it) => {
                        let sum = condensed.get(it.id) || 0;
                        condensed.set(it.id, sum += it.errorCount);                        
                    });

                    //sort by errorCount, largest to smallest
                    let condensedSorted = new Map([...condensed.entries()].sort((a,b) => b[1] - a[1]));

                    //write to file
                    fs.writeFileSync(`./reports/${type}/${date}/summary.json`, JSON.stringify(Object.fromEntries(condensedSorted), null, 2));
                    console.log(`./reports/${type}/${date}/summary.json`);                    
                }catch(err){
                    console.error(err);
                }        
            });        
    });    
}
