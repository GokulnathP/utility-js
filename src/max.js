const reduce = require("./reduce");

const max = (list) => {
    const callbackFunction = (inputElement, previousOutput) => inputElement > previousOutput ? inputElement : previousOutput;
    return reduce(list, callbackFunction, undefined);
}

module.exports = max;