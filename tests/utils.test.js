const { add, divide, multiply, isEven } = require('../src/utils');

describe('add', () => {
  test('adds two numbers', () => expect(add(2, 3)).toBe(5));
  test('handles negatives', () => expect(add(-1, 1)).toBe(0));
});

describe('divide', () => {
  test('divides correctly', () => expect(divide(10, 2)).toBe(5));
  test('throws on zero', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero');
  });
});

describe('multiply', () => {
  test('multiplies', () => expect(multiply(3, 4)).toBe(12));
});

describe('isEven', () => {
  test('even number', () => expect(isEven(4)).toBe(true));
  test('odd number', () => expect(isEven(3)).toBe(false));
});
