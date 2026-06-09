const suma = require("../suma");

test("2 + 2 debe ser 4", () => {
  expect(suma(2, 2)).toBe(4);
});