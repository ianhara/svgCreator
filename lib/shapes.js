class Circle{
    constructor(color, text, textColor){
        this.color = color;
        this.text = text
        this.textColor = textColor
    }
 render(){
    return `<circle cx="150" cy="100" r="120" fill="${this.color}"/>`
 }
}

