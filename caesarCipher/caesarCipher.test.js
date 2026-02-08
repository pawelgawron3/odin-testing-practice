import { caesarCipher } from "./caesarCipher.js";

describe("Test caesar cipher", () => {
  test("caesarCipher() function exists", () => {
    expect(caesarCipher).not.toBeUndefined();
  });

  test("caesarCipher() should take a string and a number args", () => {
    expect(() => caesarCipher()).toThrow();
    expect(() => caesarCipher("abc")).toThrow();
    expect(() => caesarCipher(2, "abc")).toThrow();
    expect(() => caesarCipher("abc", 4.12)).toThrow();
    expect(() => caesarCipher("caesar", 3)).not.toThrow();
  });

  test("caesarCipher() should return a correct value", () => {
    expect(caesarCipher("caesar", 3)).toBe("fdhvdu");
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    expect(caesarCipher("xyz", 3)).toBe("abc");
    expect(caesarCipher("Pablo", 5)).toBe("Ufgqt");
    expect(caesarCipher("P.ab-lo", 5)).toBe("U.fg-qt");
  });

  test("caesarCipher() should trim tralling spaces in string arg", () => {
    expect(caesarCipher("   caesar ", 3)).toBe("fdhvdu");
  });
});
