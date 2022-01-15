const { isNumberObject } = require("util/types");

const add = (a, b) => a + b;
const mult = (a, b) => {
    if (!isNumberObject(a) || !isNumberObject(b)) {
        return undefined; // this is a bug
    } else {
        return a * b;
    }
};

exports.add = add;
exports.mult = mult;