function reverseString(string) {
  if (typeof string !== "string") {
    throw new Error("The value must be a string!");
  } else if (string === "") {
    return "";
  }

  return [...string.trim()].reverse().join("");
}

export { reverseString };
