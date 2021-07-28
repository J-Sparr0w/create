const prompt = require('prompt-sync')({ sigint: true });
const fs = require('fs');
const html = require('./boiler');
let [type, project] = require('process').argv.slice(2);


function writeBoiler() {
     

    if (!project) {
        project = prompt('project name:');
    }
    const projectPath = `${process.cwd()}/${project}`
    const srcPath = `${project}/src`;
    fs.mkdirSync(projectPath);
    fs.mkdirSync(srcPath);

    if (type === 'v' || type === 'vanilla') {
        fs.writeFileSync(`${srcPath}/index.html`, html.getHTML(project));
        console.log("html added");
        fs.writeFileSync(`${srcPath}/styles.css`, html.cssBoiler);
        console.log("css added");
        fs.writeFileSync(`${srcPath}/index.js`, html.jsBoiler);
        console.log("index.js added");
    }

}
exports.writeBoiler = writeBoiler;