const map = require('./map');

describe("Map", () => {

    it("map([], cube) should give []", () => {
        const cube = (number) => number ** 3;

        const cubedList = map([], cube);

        expect(cubedList).toEqual([]);
    });

});

