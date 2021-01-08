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

});