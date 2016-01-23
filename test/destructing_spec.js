'use strict';

const assert = require('assert');

describe('ES2015 Destructing ', () => {
  describe('Arrays', () => {
    it('should fully destruct an array', () => {
      // Given
      const array = [1, 2, 3];

      // When
      const [first, second, third] = array;

      // Then
      assert.equal(first, array[0]);
      assert.equal(second, array[1]);
      assert.equal(third, array[2]);
    });

    it('should partially destruct an arrays', () => {
      // Given
      const array = [1, 2, 3];

      // When
      const [first,, third] = array;

      // Then
      assert.equal(first, array[0]);
      assert.equal(third, array[2]);
    });
  });

  describe('Objects', () => {
    it('should destruct a simple object', () => {
      // Given
      const json = { one: 1, two: 2, three: 3 };

      // When
      const { one, two, three } = json;

      // Then
      assert.equal(one, json.one);
      assert.equal(two, json.two);
      assert.equal(three, json.three);
    });

    it('should destruct a complex object', () => {
      // Given
      const json = { numbers: { one: 1, two: 2, three: 3 } };

      // When
      const { numbers: { one } } = json;

      // Then
      assert.equal(one, json.numbers.one);
    });
  });
});
