'use strict';

const assert = require('chai').assert;

describe('ES2015 Destructuring ', () => {
  describe('Arrays', () => {
    it('should fully destructure an array', () => {
      // Given
      const array = [1, 2, 3];

      // When
      const [first, second, third] = array;

      // Then
      assert.equal(first, array[0]);
      assert.equal(second, array[1]);
      assert.equal(third, array[2]);
    });

    it('should partially destructure an arrays', () => {
      // Given
      const array = [1, 2, 3];

      // When
      const [first,, third] = array;

      // Then
      assert.equal(first, array[0]);
      assert.equal(third, array[2]);
    });

    it('should destructure return value', () => {
      // Given
      function f() {
        return [1, 2];
      }

      // When
      const [first, second] = f();

      // Then
      assert.equal(first, 1);
      assert.equal(second, 2);
    });
  });

  describe('Objects', () => {
    it('should destructure a simple object', () => {
      // Given
      const json = { one: 1, two: 2, three: 3 };

      // When
      const { one, two, three } = json;

      // Then
      assert.equal(one, json.one);
      assert.equal(two, json.two);
      assert.equal(three, json.three);
    });

    it('should destructure a complex object', () => {
      // Given
      const json = { numbers: { one: 1, two: 2, three: 3 } };

      // When
      const { numbers: { one } } = json;

      // Then
      assert.equal(one, json.numbers.one);
    });

    it('should not assign missing field', () => {
      // Given
      const json = { one: 1, two: 2, three: 3 };

      // When
      const { invalid } = json;

      // Then
      assert.isUndefined(invalid);
    });
  });
});
