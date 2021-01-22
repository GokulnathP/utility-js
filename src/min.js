const reduce = require("./reduce");

const min = (list) => {
    const callbackFunction = (inputElement, previousOutput) => inputElement < previousOutput ? inputElement : previousOutput;
    return reduce(list, callbackFunction, undefined);
}

module.exports = min;