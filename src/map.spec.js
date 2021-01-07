const map = require('./map');

describe("Map", () => {

    it("map([], cube) should give []", () => {
        const cube = (number) => number ** 3;

        const cubedList = map([], cube);

        expect(cubedList).toEqual([]);
    });

    it("map([1,2,3], identity) should give [1,2,3]", () => {
        const identity = (number) => number;

        const identityList = map([1,2,3], identity);

        expect(identityList).toEqual([1,2,3]);
    });

});

