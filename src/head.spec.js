const head = require('./head');

describe("Head", () => {

    it("head([]) should be undefined", () => {

        const firstElement = head([]);

        expect(firstElement).toEqual(undefined);
    });

    it("head([1,2,3]) should be 1", () => {

        const firstElement = head([1,2,3]);

        expect(firstElement).toEqual(1);
    });

});