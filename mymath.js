const { isNumberObject } = require("util/types");

const add = (a, b) => a + b;
const mult = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return Number.NaN; // this is a bug
    } else {
        return a * b;
    }
};

exports.add = add;
exports.mult = mult;