const reduce = require("./reduce");

describe("Reduce", () => {

    it("Should return undefined when empty list is passed", () => {
        const callbackFunction = (x, y) => x + y;

        const finalReducedValue = reduce([], callbackFunction);

        expect(finalReducedValue).toEqual(undefined);
    });

    it("should return 10 when empty list passed with initial value of 10", () => {
        const callbackFunction = (x, y) => x + y;

        const finalReducedValue = reduce([], callbackFunction, 10);

        expect(finalReducedValue).toEqual(10);
    });

    it("Should return abc when list of a, b and c passed with add call back function", () => {
        const callbackFunction = (x, y) => x + y;

        const finalReducedValue = reduce(['a', 'b', 'c'], callbackFunction);

        expect(finalReducedValue).toEqual("abc");
    });

    it("Should return zabc when list of a, b and c passed with add call back and initial value of z", () => {
        const callbackFunction = (x, y) => x + y;

        const finalReducedValue = reduce(['a', 'b', 'c'], callbackFunction, 'z');

        expect(finalReducedValue).toEqual("zabc");
    });

    it("Should return 24 when list with 1, 2, 3 and 4 passed with multiplication call back", () => {
        const callbackFunction = (x, y) => x * y;

        const finalReducedValue = reduce([1,2,3,4], callbackFunction);

        expect(finalReducedValue).toEqual(24);
    });

});