const inquirer = require("inquirer")
const fs = require("fs")
const {Triangle, Circle, Square} = require('./lib/shapes.js')

function prompt(){
     inquirer.prompt([
        
        {
        type: 'input',
        name: 'text',
        message: 'enter three letter to use for logo'
        },
        {
        type: 'list',
        name: 'shape',
        choices: ['triangle','square','circle'],
        message: 'enter the shape'
        
        },
        {
        type: 'input',
        name: 'textColor',
        message: 'enter the text color to use for logo'
        },
        {
        type: 'input',
        name: 'shapeColor',
        message: 'enter shape color to use for logo'
        },
        
    ]).then(function(answers){
        console.log(answers)
        readSvg(answers)
    
    })

    
}
//depending on shape user selects alter template
function readSvg(answers){
    let newShape;
    if(answers.shape === 'triangle'){
        console.log("user picked triangle")
        newShape = new Triangle(answers.shapeColor,answers.text,answers.textColor)
    }
    if(answers.shape === 'square'){
        console.log("user picked square")
        
        
    }
    if(answers.shape === 'circle'){
        console.log("user picked circle")
        
    } const logo = 
 `${newShape.render()} `

  fs.writeFile(`./output`, `utf8`)
    
    
}
prompt()