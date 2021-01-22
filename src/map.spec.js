const map = require('./map');

describe("Map", () => {

    it("Should return empty list when empty list is passed to map", () => {
        const cube = (number) => number ** 3;

        const cubedList = map([], cube);

        expect(cubedList).toEqual([]);
    });

    it("Should  return same list when identity function passed", () => {
        const identity = (number) => number;

        const identityList = map([1,2,3], identity);

        expect(identityList).toEqual([1,2,3]);
    });

    it("Should return list with cubed values when function for cube is passed", () => {
        const cube = (number) => number ** 3;

        const cubedList = map([1,2,3], cube);

        expect(cubedList).toEqual([1,8,27]);
    });

    it("Should return a list as per function passed when list of object passed", () => {
        const callbackFunction = (object) => object.x + 1;

        const outputList = map([{x: 10}], callbackFunction);

        expect(outputList).toEqual([11]);
    });

});

