const min = require("./min");

describe('Min', () => {

    it('Should return undefined when empty list passed', () => {

        const minimumValue = min([]);

        expect(minimumValue).toEqual(undefined);
    });

    it('Should return 1 when list with 1, 2, 3 and 4 are passed', () => {

        const minimumValue = min([1,2,3,4]);

        expect(minimumValue).toEqual(1);
    });

});