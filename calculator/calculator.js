let calculator = {
  add: function (num1, num2) {
    if (!this.valuesAreNumbers(num1, num2)) {
      throw new Error("The value must be a number!");
    }

    return num1 + num2;
  },
  subtract: function (num1, num2) {
    if (!this.valuesAreNumbers(num1, num2)) {
      throw new Error("The value must be a number!");
    }

    return num1 - num2;
  },
  divide: function (num1, num2) {
    if (!this.valuesAreNumbers(num1, num2)) {
      throw new Error("The value must be a number!");
    } else if (num2 === 0) {
      throw new Error("You can't divide by 0!");
    }

    return num1 / num2;
  },
  multiply: function (num1, num2) {
    if (!this.valuesAreNumbers(num1, num2)) {
      throw new Error("The value must be a number!");
    }

    return num1 * num2;
  },

  valuesAreNumbers: function (num1, num2) {
    return typeof num1 !== "number" || typeof num2 !== "number" ? false : true;
  },
};

export { calculator };
