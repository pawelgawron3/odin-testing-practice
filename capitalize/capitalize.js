function capitalize(word) {
  if (typeof word !== "string") {
    throw new Error("The value must be a string!");
  } else if (word === "") {
    return "";
  }

  let formattedWord = word.trim();
  return formattedWord[0].toUpperCase() + formattedWord.slice(1);
}

export { capitalize };
