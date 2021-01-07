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

    it("map([1,2,3], cube) should give [1,8,27]", () => {
        const cube = (number) => number ** 3;

        const cubedList = map([1,2,3], cube);

        expect(cubedList).toEqual([1,8,27]);
    });

});

