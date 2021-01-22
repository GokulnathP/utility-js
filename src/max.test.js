const max = require("./max");

describe("Max", () => {

    it("max([]) should be undefined", () => {

        const maximumValue = max([]);

        expect(maximumValue).toEqual(undefined);
    });

    it("max([1,2,3,4]) should be 4", () => {

        const maximumValue = max([1,2,3,4]);

        expect(maximumValue).toEqual(4);
    });

});