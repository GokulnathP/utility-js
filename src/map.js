const head = require("./head");
const tail = require("./tail");

const mapEveryElement = (inputList, outputList, callbackFunction) => {
    if (inputList?.length > 0) {
        const firstElement = head(inputList);
        const output = callbackFunction(firstElement);

        const outputListLength = outputList.length;
        outputList[outputListLength] = output;

        return mapEveryElement(tail(inputList), outputList, callbackFunction);
    }
    return outputList;
}

const map = (list, callbackFunction) => {
    return mapEveryElement(list, [], callbackFunction);
}

module.exports = map;