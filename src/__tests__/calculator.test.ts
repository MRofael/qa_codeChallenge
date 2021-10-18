import calculator from "../calculator";

// each of the objects in the dataset array has the pieces of a math problem.
// "add": x + y
// "subtract": x - y
// "multiply": x * y
// "divide": x / y
let dataset = [
  { x: 5, y: 10, method: "add" },
  { x: 5, y: 10, method: "subtract" },
  { x: 5, y: 10, method: "multiply" },
  { x: 5, y: 10, method: "divide" },
  { x: -12, y: 10000, method: "add" },
  { x: -12, y: 10000, method: "subtract" },
  { x: -12, y: 10000, method: "multiply" },
  { x: -12, y: 10000, method: "divide" },
  { x: 42, y: 0, method: "add" },
  { x: 42, y: 0, method: "subtract" },
  { x: 42, y: 0, method: "multiply" },
  { x: 42, y: 0, method: "divide" },
  { x: 81, y: 227, method: "add" },
  { x: 81, y: 227, method: "subtract" },
  { x: 81, y: 227, method: "multiply" },
  { x: 81, y: 227, method: "divide" },
];


describe("Calculator", () => {
  dataset.forEach((calculation) => {
    it(`The ${calculation.method} method to be with ${calculation.x} and ${calculation.y}`, () => {
      switch (calculation.method) {
        case "add":
          expect(calculator.add(calculation.x, calculation.y)).toEqual(calculation.x + calculation.y);
          break;
        case "subtract":
          expect(calculator.subtract(calculation.x, calculation.y)).toEqual(calculation.x - calculation.y);
          break;
        case "multiply":
          expect(calculator.multiply(calculation.x, calculation.y)).toEqual(calculation.x * calculation.y);
          break;
        case "divide":
          expect(calculator.divide(calculation.x, calculation.y)).toEqual(calculation.x / calculation.y);
          break;
        default:
          console.log("Calculation method is not available.")
      }
    });
  });
})
