import { analyzeArray } from "./analyzeArray.js";

describe("Test analyzeArray() function", () => {
  test("analyzeArray() function exists", () => {
    expect(analyzeArray).not.toBeUndefined();
  });

  test("analyzeArray() should return an empty object", () => {
    expect(analyzeArray([])).toEqual({});
  });

  test("analyzeArray() should take an array of numbers arg", () => {
    expect(() => analyzeArray()).toThrow();
    expect(() => analyzeArray(["1", 2, 3, 4])).toThrow();
    expect(() => analyzeArray([1, 2, [3], 4])).toThrow();
  });

  test("analyzeArray() returned object should have 'average' prop", () => {
    expect(analyzeArray([1, 2, 3]).average).not.toBeUndefined();
  });

  test("analyzeArray() returned object should have 'min' prop", () => {
    expect(analyzeArray([1, 2, 3]).min).not.toBeUndefined();
  });

  test("analyzeArray() returned object should have 'max' prop", () => {
    expect(analyzeArray([1, 2, 3]).max).not.toBeUndefined();
  });

  test("analyzeArray() returned object should have 'length' prop", () => {
    expect(analyzeArray([1, 2, 3]).length).not.toBeUndefined();
  });

  test("'average' prop should return correct value", () => {
    expect(analyzeArray([1, 2, 3]).average).toBe(2);
    expect(analyzeArray([5, 1, 1, 9]).average).toBe(4);
    expect(analyzeArray([4, 2.3, 6, 5.41, 2]).average).toBeCloseTo(3.942);
  });

  test("'min' prop should return correct value", () => {
    expect(analyzeArray([1, 2, 3]).min).toBe(1);
    expect(analyzeArray([5, 1, 1, 9]).min).toBe(1);
    expect(analyzeArray([4, 2.3, 6, 5.41]).min).toBeCloseTo(2.3);
  });

  test("'max' prop should return correct value", () => {
    expect(analyzeArray([1, 2, 3]).max).toBe(3);
    expect(analyzeArray([5, 1, 1, 9]).max).toBe(9);
    expect(analyzeArray([4, 2.3, 6, 5.41, 2]).max).toBe(6);
  });

  test("'length' prop should return correct value", () => {
    expect(analyzeArray([1, 2, 3]).length).toBe(3);
    expect(analyzeArray([5, 1, 1, 9]).length).toBe(4);
    expect(analyzeArray([4, 2.3, 6, 5.41, 2]).length).toBe(5);
  });
});
