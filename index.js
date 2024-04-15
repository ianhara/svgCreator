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
        newShape = new Square(answers.shapeColor,answers.text,answers.textColor)

        
    }
    if(answers.shape === 'circle'){
        console.log("user picked circle")
        newShape = new Circle(answers.shapeColor,answers.text,answers.textColor)

    } const logo = newShape.render()

  fs.writeFileSync(`./output/logo.svg`, logo, `utf8`)
    
    
}
prompt()