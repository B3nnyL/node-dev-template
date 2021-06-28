import { add } from '../src/add';

describe('test', () => {
    it('add', () => {
        expect(add(1,2)).toEqual(3);
    });
});