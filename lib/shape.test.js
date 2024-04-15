const { Triangle } = require('./shapes');

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

