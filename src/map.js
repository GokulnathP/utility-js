const head = require("./head");
const tail = require("./tail");

const mapEveryElement = (inputList, outputList, fn) => {
    if (inputList?.length > 0) {
        const firstElement = head(inputList);
        const output = fn(firstElement);

        const outputListLength = outputList.length;
        outputList[outputListLength] = output;

        return mapEveryElement(tail(inputList), outputList, fn);
    }
    return outputList;
}

const map = (list, fn) => {
    return mapEveryElement(list, [], fn);
}

module.exports = map;