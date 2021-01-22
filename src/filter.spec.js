const filter = require("./filter");

describe("Filter", () => {

    it("Should return empty list when empty list passed as input", () => {
        const callbackFunction = () => true;

        const filteredOutput = filter([], callbackFunction);

        expect(filteredOutput).toEqual([]);
    });

    it("Should return same input list when callback function return always true", () => {
        const callbackFunction = () => true;

        const filteredOutput = filter([1,2,3], callbackFunction);

        expect(filteredOutput).toEqual([1,2,3]);
    });

    it("Should return empty input list when callback function return always false", () => {
        const callbackFunction = () => false;

        const filteredOutput = filter([1,2,3], callbackFunction);

        expect(filteredOutput).toEqual([]);
    });

    it("Should return list with 2 and 3 when callback function check for number greater than one with input contain 1, 2 and 3", () => {
        const callbackFunction = value => value > 1;

        const filteredOutput =  filter([1,2,3], callbackFunction);

        expect(filteredOutput).toEqual([2,3]);
    });

    it("Should return uppercase characters when callback function check for uppercase", () => {
        const filterUpperCase = character => character.toUpperCase() === character;

        const filteredOutput = filter(['a', 'B', 'c', 'D'], filterUpperCase);

        expect(filteredOutput).toEqual(['B', 'D']);
    });
});