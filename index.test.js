const add = require('./');

/** I FIND THIS FORMAT OF TEST CASE DATA MOST CONVENIENT */
const testCases = [
  { a: 1, b: 2, result: 3 },
  { a: 10, b: 20, result: 30 },
  { a: -5, b: 10, result: 5 },
  { a: 100, b: -20, result: 80 }
];

/*
 * THIS FUNCTION WILL HELPS US TO MAP DATA TO it.each format of
 * [
 *  [case1Value1,case1Value2,case1Value3],
 *  [case2Value1,case2Value2,...],
 *  ...
 * ]
 * inputData: any,
 * return type: Array<Array<any>>
 */
const dataMapper = inputData => inputData.map(Object.values);

describe('function "add()" ', () => {
  test('should exist ', () => {
    expect(add).toBeDefined();
  });

  describe('passes all tests using VANILLA `it.each` syntax', () => {
    it.each`
      a      | b      | result
      ${1}   | ${2}   | ${3}
      ${10}  | ${20}  | ${30}
      ${-5}  | ${10}  | ${5}
      ${100} | ${-20} | ${80}
    `('$a + $b = $result', ({ a, b, result }) => {
      expect(add(a, b)).toEqual(result);
    });
  });
  describe('passes all tests using MAPPED `it.each` syntax', () => {
    test.each(dataMapper(testCases))(`%i + %i = %i`, (a, b, expected) => {
      expect(add(a, b)).toBe(expected);
    });
  });
});
