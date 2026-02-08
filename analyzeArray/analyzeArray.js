function analyzeArray(arrayOfNumbers) {
  if (arrayOfNumbers.length === 0) {
    return {};
  }

  arrayOfNumbers.forEach((el) => {
    if (typeof el !== "number") {
      throw new Error("Invalid array element type!");
    }
  });

  return {
    average:
      arrayOfNumbers.reduce((acc, val) => acc + val, 0) / arrayOfNumbers.length,
    min: Math.min(...arrayOfNumbers),
    max: Math.max(...arrayOfNumbers),
    length: arrayOfNumbers.length,
  };
}

export { analyzeArray };
