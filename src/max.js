const head = require("./head");
const tail = require("./tail");

const maximumElement = (inputList, outputValue) => {
    if(inputList?.length > 0) {
        const firstElement = head(inputList);

        if(!outputValue || outputValue < firstElement) {
            outputValue = firstElement;
        }

        return maximumElement(tail(inputList), outputValue);
    }

    return outputValue;
}

const max = (list) => {
    return maximumElement(list, undefined);
}

module.exports = max;