const data = require('./config.json');
const fs = require('fs');
const path = require('path');
const { processCommandExecution } = require('./executionProcess');

let cmds = [];

if (data) {
    debugger;
    const dirpath = fs.existsSync(data.projectName);
    if(dirpath) {
        const dirNames = path.dirname(data.projectName);
    }
    if (data.projectName) {
        cmds.push(`ng new ${data.projectName} --style=${data.style}` + '\r\n');
        if (data.components.length > 0) {
            data.components.forEach(comp => {
                if (comp.componentName) {
                    cmds.push(`cd ${data.projectName} && ng g c ${comp.componentName}` + '\r\n');
                    if (comp.child.length > 0) {
                        comp.child.forEach(child => {
                            cmds.push(`cd ${data.projectName} && ng g c ${comp.componentName}/${child.componentName}` + '\r\n')
                        });
                    }
                }
            });
        }
    }


}

processCommandExecution(cmds, function (err) {
    console.log('executed many commands in a row');
});