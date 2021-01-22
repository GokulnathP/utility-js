const head = require('./head');

describe("Head", () => {

    it("Should return undefined when empty list passed", () => {

        const firstElement = head([]);

        expect(firstElement).toEqual(undefined);
    });

    it("Should return 1 when list with 1, 2 and 3 passed", () => {

        const firstElement = head([1,2,3]);

        expect(firstElement).toEqual(1);
    });

});