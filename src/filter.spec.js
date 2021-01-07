const filter = require("./filter");

describe("Filter", () => {

    it("filter([], x => true) should give []", () => {
        const callbackFunction = value => true;

        const filterdOuput = filter([], callbackFunction);

        expect(filterdOuput).toEqual([]);
    });

});