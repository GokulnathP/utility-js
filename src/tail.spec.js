const tail = require("./tail");

describe("Tail", () => {

    it("Should return empty list when empty list passed", () => {

        const tailElements = tail([]);

        expect(tailElements).toEqual([]);
    });

    it("should return list with 2 and 3 when list with 1, 2 and 3 passed", () => {

        const tailElements = tail([1,2,3]);

        expect(tailElements).toEqual([2,3]);
    });

});