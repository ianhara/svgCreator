# Logo creator

A command-line application for generating logos

## Installation

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install`.

## Usage

1. Run `node index.js`.
2. Choose a shape, customize its color, and add text.
3. Logo will be generated in the `output` directory.

## Shape Classes

Includes classes for Triangle, Circle, and Square shapes. Each has a `render()` method generating SVG code.

## Contributions
Tutor provided by calendly : Juan 

## Video
https://drive.google.com/file/d/1kWXvlbss0RBtA36gvWzpB6ffWJMcU8Yd/view


## Testing

Jest tests for each shape class ensure `render()` method outputs expected SVG code.

Run tests with `npx jest`.