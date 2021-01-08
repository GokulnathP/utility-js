const reduce = require("./reduce");

describe("Reduce", () => {

    it("reduce([],(x,y)=>x+y) should be undefined", () => {
        const callbackFunction = (x, y) => x + y;

        const finalReducedValue = reduce([], callbackFunction);

        expect(finalReducedValue).toBeFalsy();
    });

    it("reduce([],v(x,y)=>x+y,10) should be 10", () => {
        const callbackFunction = (x, y) => x + y;

        const finalReducedValue = reduce([], callbackFunction, 10);

        expect(finalReducedValue).toEqual(10);
    });

    it("reduce(['a','b','c'],(x,y)=>x+y) should be abc", () => {
        const callbackFunction = (x, y) => x + y;

        const finalReducedValue = reduce(['a', 'b', 'c'], callbackFunction);

        expect(finalReducedValue).toEqual("abc");
    });

    it("reduce(['a','b','c'],(x,y)=>x+y,’z’), should be zabc", () => {
        const callbackFunction = (x, y) => x + y;

        const finalReducedValue = reduce(['a', 'b', 'c'], callbackFunction, 'z');

        expect(finalReducedValue).toEqual("zabc");
    });

});