const inquirer = require("inquirer")
const fs = require("fs")

function prompt(){
    return inquirer.prompt([
        {
        type: 'input',
        name: 'text',
        message: 'enter three letter to use for logo'
        },
    ])
}
//depending on shape user selects alter template
function readSvg(shape){
    const svgTemp = fs.readFile(`./${shape.toLowerCase()}.svg`, `utf8`)
    return svgTemp
}