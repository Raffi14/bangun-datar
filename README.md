# Bangun Datar Calculator

A JavaScript library for calculating the area and perimeter of various 2D geometric shapes (bangun datar) such as squares, circles, and triangles.

## Features

- Calculate area and perimeter of:
  - Square (Persegi)
  - Circle (Lingkaran)
  - Triangle (Segitiga)

## Usage

```javascript
const BangunDatar = require('bangun-datar');

// Calculate square area and perimeter
const square = new BangunDatar.Square(5); // side length = 5
console.log(square.getArea());      // 25
console.log(square.getPerimeter()); // 20

// Calculate circle area and circumference
const circle = new BangunDatar.Circle(7); // radius = 7
console.log(circle.getArea());        // 153.94
console.log(circle.getCircumference()); // 43.98

// Calculate triangle area and perimeter
const triangle = new BangunDatar.Triangle(6, 8, 10); // sides = 6, 8, 10
console.log(triangle.getArea());      // 24
console.log(triangle.getPerimeter()); // 24
```

## API Reference

### Square (Persegi)
- `constructor(side: number)`
- `getArea(): number`
- `getPerimeter(): number`

### Circle (Lingkaran)
- `constructor(radius: number)`
- `getArea(): number`
- `getCircumference(): number`

### Triangle (Segitiga)
- `constructor(side1: number, side2: number, side3: number)`
- `getArea(): number`
- `getPerimeter(): number`

## License

MIT
