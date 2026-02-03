import { capitalize } from "./capitalize.js";

describe("Test capitalize() function", () => {
  test("capitalize() function exists", () => {
    expect(capitalize).not.toBeUndefined();
  });

  test("should take only a string argument", () => {
    expect(() => capitalize()).toThrow();
    expect(() => capitalize(4)).toThrow();
    expect(() => capitalize("abc")).not.toThrow();
  });

  test("should return an empty string if argument is an empty string", () => {
    expect(capitalize("")).toBe("");
  });

  test("should return a capitalized word", () => {
    expect(capitalize("piotr")).toBe("Piotr");
    expect(capitalize("krzysztof")).toBe("Krzysztof");
    expect(capitalize("abc")).toBe("Abc");
    expect(capitalize("4xyz")).toBe("4xyz");
    expect(capitalize("Paweł")).toBe("Paweł");
  });

  test("should trim spaces from the string", () => {
    expect(capitalize(" avocado")).toBe("Avocado");
    expect(capitalize("    jan   ")).toBe("Jan");
  });
});
