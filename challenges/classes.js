// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  surfaceArea() {
    return (
      this.length * this.width +
      this.length * this.height +
      this.width * this.height
    );
  }

  volume() {
    return this.height * this.length * this.width;
  }
}

let cuboid = new CuboidMaker(10, 15, 10);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130;

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker {
  constructor(edgeLength) {
    super();
    this.edgeLength = edgeLength;
  }

  surfaceArea() {
    return 6 * this.edgeLength ** 2;
  }

  volume() {
    return this.edgeLength ** 3;
  }
}

let cube = new CubeMaker(4);

console.log(`cube area: ${cube.surfaceArea()}`);

console.log(`cube volume: ${cube.volume()}`);
