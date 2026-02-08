import { calculator } from "./calculator.js";

describe("Test calculator object", () => {
  test("calculator object exists", () => {
    expect(calculator).not.toBeUndefined();
  });

  test("add() method exists", () => {
    expect(calculator.add).not.toBeUndefined();
  });

  test("subtract() method exists", () => {
    expect(calculator.subtract).not.toBeUndefined();
  });

  test("divide() method exists", () => {
    expect(calculator.divide).not.toBeUndefined();
  });

  test("multiply() method exists", () => {
    expect(calculator.multiply).not.toBeUndefined();
  });

  test("add() should take 2 number args", () => {
    expect(() => calculator.add("a", "3")).toThrow();
    expect(() => calculator.add(1, "1")).toThrow();
    expect(() => calculator.add(1, 2)).not.toThrow();
    expect(() => calculator.add(1.11, 2.5)).not.toThrow();
  });

  test("subtract() should take 2 number args", () => {
    expect(() => calculator.subtract("a", "3")).toThrow();
    expect(() => calculator.subtract(1, "1")).toThrow();
    expect(() => calculator.subtract(1, 2)).not.toThrow();
    expect(() => calculator.subtract(1.11, 2.5)).not.toThrow();
  });

  test("divide() should take 2 number args", () => {
    expect(() => calculator.divide("a", "3")).toThrow();
    expect(() => calculator.divide(1, "1")).toThrow();
    expect(() => calculator.divide(1, 2)).not.toThrow();
    expect(() => calculator.divide(1.11, 2.5)).not.toThrow();
  });

  test("multiply() should take 2 number args", () => {
    expect(() => calculator.multiply("a", "3")).toThrow();
    expect(() => calculator.multiply(1, "1")).toThrow();
    expect(() => calculator.multiply(1, 2)).not.toThrow();
    expect(() => calculator.multiply(1.11, 2.5)).not.toThrow();
  });

  test("add() should return a correct value", () => {
    expect(calculator.add(1, 1)).toBe(2);
    expect(calculator.add(5, 20)).toBe(25);
    expect(calculator.add(1.5, 1.23)).toBeCloseTo(2.73);
    expect(calculator.add(0, 9.11)).toBeCloseTo(9.11);
  });

  test("subtract() should return a correct value", () => {
    expect(calculator.subtract(1, 1)).toBe(0);
    expect(calculator.subtract(5, 20)).toBe(-15);
    expect(calculator.subtract(1.5, 1.23)).toBeCloseTo(0.27);
    expect(calculator.subtract(0, 9.11)).toBeCloseTo(-9.11);
    expect(calculator.subtract(5, -7)).toBe(12);
  });

  test("divide() should return a correct value", () => {
    expect(calculator.divide(1, 1)).toBe(1);
    expect(calculator.divide(20, 5)).toBe(4);
    expect(calculator.divide(18, 1.3)).toBeCloseTo(13.85);
    expect(calculator.divide(55, -5)).toBe(-11);
  });

  test("divide() should return an error message when divided by 0", () => {
    expect(() => calculator.divide(5, 0)).toThrow();
  });

  test("multiply() should return a correct value", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
    expect(calculator.multiply(2, 1)).toBe(2);
    expect(calculator.multiply(5, 11)).toBe(55);
    expect(calculator.multiply(-3, 9.11)).toBeCloseTo(-27.33);
    expect(calculator.multiply(-5, -7)).toBe(35);
  });
});
