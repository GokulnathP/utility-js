const head = require('./head');

describe("Head", () => {

    it("head([]) should be null or undefined", () => {

        const firstElement = head([]);

        expect(firstElement).toBeFalsy();
    });

    it("head([1,2,3]) should be 1", () => {

        const firstElement = head([1,2,3]);

        expect(firstElement).toEqual(1);
    });

});