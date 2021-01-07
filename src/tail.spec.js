const tail = require("./tail");

describe("Tail", () => {

    it("tail([]) should be []", () => {

        const tailElements = tail([]);

        expect(tailElements).toEqual([]);
    });

    it("tail([1,2,3]) should be [2,3]", () => {

        const tailElements = tail([1,2,3]);

        expect(tailElements).toEqual([2,3]);
    });

});