const calculator = require("./Calculator");

test("A soma da calculadora deve estar ok", () => {
  expect(calculator.sum(2, 2)).toBe(4);
});
