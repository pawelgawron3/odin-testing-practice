import { reverseString } from "./reverseString.js";

describe("Test reverseString() function", () => {
  test("reverseString() function exists", () => {
    expect(reverseString).not.toBeUndefined();
  });

  test("should only take a string argument", () => {
    expect(() => reverseString()).toThrow();
    expect(() => reverseString(45)).toThrow();
    expect(() => reverseString("xyz")).not.toThrow();
  });

  test("should return an empty string if argument is an empty string", () => {
    expect(reverseString("")).toBe("");
  });

  test("should return a reversed string", () => {
    expect(reverseString("mike")).toBe("ekim");
    expect(reverseString("Plane")).toBe("enalP");
    expect(reverseString("R2D2")).toBe("2D2R");
    expect(reverseString("kajak")).toBe("kajak");
  });

  test("should return a reversed string with spaces in between", () => {
    expect(reverseString("String with spaces.")).toBe(".secaps htiw gnirtS");
    expect(reverseString("Anoth3r ex4mplE...")).toBe("...Elpm4xe r3htonA");
  });

  test("should trim spaces from the string", () => {
    expect(reverseString("  Italy")).toBe("ylatI");
    expect(reverseString("   xyz      ")).toBe("zyx");
  });
});
