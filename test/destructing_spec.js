'use strict';

const assert = require('assert');

describe('ES2015 Destructing ', () => {
  describe('arrays', () => {
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
});
