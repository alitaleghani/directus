import { toArray } from '.';

describe('toArray', () => {
	it('takes in a string and returns an array', () => {
		expect(toArray('1,2,3,4,5')).toStrictEqual(['1', '2', '3', '4', '5']);
	});

	it('when passed an array returns the array', () => {
		expect(toArray(['1', '2', '3', '4', '5'])).toStrictEqual(['1', '2', '3', '4', '5']);
	});
});
