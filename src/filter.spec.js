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

});