const reduce = require("./reduce");

describe("Reduce", () => {

    it("reduce([],(x,y)=>x+y) should be undefined", () => {
        const callbackFunction = (x, y) => x + y;

        const finalReducedValue = reduce([], callbackFunction);

        expect(finalReducedValue).toBeFalsy();
    });

});