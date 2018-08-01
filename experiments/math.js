const colors = require("colors");

const math = require("../lib/math");

console.log(colors.underline("1 + 2 =", math.add(1, 2)));
console.log(colors.underline("1 - 2 =", math.substract(1, 2)));
