# jest-each-parametrized-tests

## Idea behind the example
This piece of code means to evaluate approach to parametrized jest testing with mapping arrays of objects with parameters to jest's `it.each` syntax:
```
 describe('test add method', () => {
   it.each`
     a     | b     | result
     ${2}  | ${3}  | ${5}
     ${20} | ${30} | ${50}
     ${-2} | ${-3} | ${-5}
   `('should return $result when $a and $b are used', ({ a, b, result }) => {
     expect(add(a, b)).toEqual(result);
   });
 });
```

### Solution
Having tests decalred as array of objects:
```
const testCases = [
  { a: 1, b: 2, result: 3 },
  { a: 10, b: 20, result: 30 },
  { a: -5, b: 10, result: 5 },
  { a: 100, b: -20, result: 80 }
];

```
Using this function:
> `const dataMapper = (inputData) => inputData.map(Object.values)`

 we can write tests like this:

```
describe('passes all tests using MAPPED `it.each` syntax', () => {
    test.each(dataMapper(testCases))(`%i + %i = %i`, (a, b, expected) => {
      expect(add(a, b)).toBe(expected);
    });
  });
```