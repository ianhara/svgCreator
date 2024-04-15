const { Triangle, Square, Circle } = require('./shapes');

describe('Triangle', () => {
    test('render method generates correct polygon in SVG code with given color', () => {
        // create a new triangle to test
        const shape = new Triangle("blue", "YES", "yellow");

        // check to see if text was created correctly with color
        const expectedPolygonSvg = '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>';

        // check if this line is contained within new object
        expect(shape.render()).toMatch(expectedPolygonSvg);
    });
});

describe('Circle', () => {
    test('render method generates correct circle in SVG code with given color', () => {
        const shape = new Circle("red", "Circle", "black");

        const expectedCirc = '<circle cx="150" cy="100" r="120" fill="red"/>';

        expect(shape.render()).toContain(expectedCirc);
    });
});

describe('Square', () => {
    test('render method generates correct square with given color', () => {
        const shape = new Square("green", "Square", "white");

        const expectedSq = '<rect x="90" y="40" width="120" height="120" fill="green"/>';

        expect(shape.render()).toContain(expectedSq);
    });
});



