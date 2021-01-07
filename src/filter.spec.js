const filter = require("./filter");

describe("Filter", () => {

    it("filter([], x => true) should give []", () => {
        const callbackFunction = value => true;

        const filteredOutput = filter([], callbackFunction);

        expect(filteredOutput).toEqual([]);
    });

    it("filter([1,2,3],x => true) should give [1,2,3]", () => {
        const callbackFunction = value => true;

        const filteredOutput = filter([1,2,3], callbackFunction);

        expect(filteredOutput).toEqual([1,2,3]);
    });

    it("filter([1,2,3],x => false) should give []", () => {
        const callbackFunction = value => false;

        const filteredOutput = filter([1,2,3], callbackFunction);

        expect(filteredOutput).toEqual([]);
    });

    it("filter([1,2,3],x => x > 1) should give [2,3]", () => {
        const callbackFunction = value => value > 1;

        const filteredOutput =  filter([1,2,3], callbackFunction);

        expect(filteredOutput).toEqual([2,3]);
    });

    it("filter(['a','B','c','D'], filterUpperCase) should be [B,D]", () => {
        const filterUpperCase = character => character.toUpperCase() === character;

        const filteredOutput = filter(['a', 'B', 'c', 'D'], filterUpperCase);

        expect(filteredOutput).toEqual(['B', 'D']);
    });
});