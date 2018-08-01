const math = require("../lib/math");

console.assert(math.add(1, 2) === 3, "1 + 2 = 3");
console.assert(math.add(2, 4) === 6, "2 + 4 = 6");
console.assert(math.add(3, 6) === 9, "3 + 6 = 9");
console.assert(math.add(4, 8) === 12, "4 + 8 = 12");
console.assert(math.add(5, 10) === 15, "5 + 10 = 15");

console.assert(math.multiply(2, 2) === 4, "2 x 2 = 4");

console.assert(math.divide(4, 2) === 2, "4 / 2 = 2");
