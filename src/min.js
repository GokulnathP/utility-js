const head = require("./head");
const tail = require("./tail");

const minimumElement = (inputList, outputValue) => {
    if(inputList?.length > 0) {
        const firstElement = head(inputList);

        if(!outputValue || outputValue > firstElement) {
            outputValue = firstElement;
        }

        return minimumElement(tail(inputList), outputValue);
    }

    return outputValue;
}

const min = (list) => {
    return minimumElement(list, undefined);
}

module.exports = min;