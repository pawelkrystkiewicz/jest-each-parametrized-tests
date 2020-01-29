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