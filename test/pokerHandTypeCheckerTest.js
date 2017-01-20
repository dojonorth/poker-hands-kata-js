let expect = require('chai').expect;
let Card = require('../src/card');
let pokerHandTypeChecker = require('../src/pokerHandTypeChecker');
let HandType = require('../src/HandTypes');

describe('Poker Hand Type Checker', () => {
  describe('given a high card hand', () => {
    it('should return this a high card hand as result', () => {
      let hand = [
          new Card('2', 'H'),
          new Card('3', 'D'),
          new Card('5', 'S'),
          new Card('9', 'C'),
          new Card('K', 'D')
      ];

      expect(pokerHandTypeChecker.check(hand)).to.be.equal(HandType.HIGHCARD);
    });
  });

  describe('given a flush hand', () => {
    it('should return flush type as result', () => {
      let hand = [
          new Card('2', 'H'),
          new Card('7', 'H'),
          new Card('5', 'H'),
          new Card('J', 'H'),
          new Card('K', 'H')
      ];

      expect(pokerHandTypeChecker.check(hand)).to.be.equal(HandType.FLUSH);
    });
  });
});
