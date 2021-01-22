const max = require("./max");

describe("Max", () => {

    it("Should return undefined when empty list passed", () => {

        const maximumValue = max([]);

        expect(maximumValue).toEqual(undefined);
    });

    it("Should return 4 when list of 1, 2, 3 and 4 are passed", () => {

        const maximumValue = max([1,2,3,4]);

        expect(maximumValue).toEqual(4);
    });

});