const min = require("./min");

describe('Min', () => {

    it('min([]) should be undefined', () => {

        const minimumValue = min([]);

        expect(minimumValue).toEqual(undefined);
    });

    it('min([1,2,3,4]) should be 1', () => {

        const minimumValue = min([1,2,3,4]);

        expect(minimumValue).toEqual(1);
    });

});