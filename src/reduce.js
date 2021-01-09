const head = require("./head");
const tail = require("./tail");

const reduceEveryElement = (inputlist, callbackFunction, outputValue) => {
    if (inputlist?.length > 0) {
        const firstElement = head(inputlist);

        if (outputValue) {
            outputValue = callbackFunction(outputValue, firstElement) ;
        } else {
            outputValue = firstElement;
        }

        return reduceEveryElement(tail(inputlist), callbackFunction, outputValue);
    }
    return outputValue;
}

const reduce = (list, callbackFunction, startValue) => {
    return reduceEveryElement(list, callbackFunction, startValue);
}

module.exports = reduce;