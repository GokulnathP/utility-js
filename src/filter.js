const head = require("./head");
const tail = require("./tail");

const filterEveryElement = (inputList, outputList, callbackFunction) => {
    if(inputList?.length > 0) {
        const firstElement = head(inputList);
        const canIAddToOutput = callbackFunction(firstElement);

        if(canIAddToOutput) {
            const outputListLength = outputList.length;
            outputList[outputListLength] = firstElement;
        }
        return filterEveryElement(tail(inputList), outputList, callbackFunction);
    }
    return outputList;
}

const filter = (list, callbackFunction) => {
    return filterEveryElement(list, [], callbackFunction);
}

module.exports = filter;