function caesarCipher(string, shiftFactor) {
  if (typeof string !== "string" || !Number.isInteger(shiftFactor)) {
    throw new Error("Invalid args!");
  }

  const shift = ((shiftFactor % 26) + 26) % 26;

  return string
    .trim()
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);

      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }

      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }

      return char;
    })
    .join("");
}

export { caesarCipher };
