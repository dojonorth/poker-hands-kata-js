let expect = require('chai').expect;
let Card = require('../src/card');
let game = require('../src/game');

describe('Poker Game', function() {
  describe('Full house hand vs High card hand', function() {
    it('should return the full house player as winner', function () {
      let black = {
        name: 'Black',
        hand: [
          new Card('2', 'H'),
          new Card('4', 'S'),
          new Card('4', 'C'),
          new Card('2', 'D'),
          new Card('4', 'H')
        ]
      };

      let white = {
        name: 'White',
        hand: [
          new Card('2', 'C'),
          new Card('3', 'H'),
          new Card('4', 'S'),
          new Card('8', 'C'),
          new Card('A', 'H')
        ]
      };
      expect(game.play(black).versus(white)).to.be.equal('Black wins. - with fullHouse');
    });
  });

  describe('Straight hand vs Flush hand', function() {
    it('should return the flush player as winner', function() {
      let black = {
        name: 'Black',
        hand: [
          new Card('T', 'H'),
          new Card('K', 'S'),
          new Card('J', 'C'),
          new Card('Q', 'D'),
          new Card('9', 'H')
        ]
      };

      let white = {
        name: 'White',
        hand: [
          new Card('5', 'D'),
          new Card('6', 'D'),
          new Card('9', 'D'),
          new Card('8', 'D'),
          new Card('2', 'D')
        ]
      };
      expect(game.play(black).versus(white)).to.be.equal('White wins. - with flush');
    });
  });

  // describe('High card hand vs high card hand', function() {
  //   it('should return the highest high card hand as winner', function () {
  //     let black = {
  //       name: 'Black',
  //       hand: [
  //         new Card('2', 'D'),
  //         new Card('4', 'S'),
  //         new Card('5', 'C'),
  //         new Card('7', 'D'),
  //         new Card('6', 'H')
  //       ]
  //     };
  //
  //     let white = {
  //       name: 'White',
  //       hand: [
  //         new Card('K', 'C'),
  //         new Card('3', 'H'),
  //         new Card('4', 'S'),
  //         new Card('8', 'C'),
  //         new Card('2', 'H')
  //       ]
  //     };
  //     expect(game.play(black).versus(white)).to.be.equal('White wins. - with high card King');
  //   });
  // });

// Extra tests for comparing hands with equal hand types

//   describe('Higher Straight hand vs Lower Straight hand', function() {
//     it('should return the Higher Straight player as winner', function() {
//       let black = {
//         name: 'Black',
//         hand: [
//           new Card('T', 'H'),
//           new Card('K', 'S'),
//           new Card('J', 'C'),
//           new Card('Q', 'D'),
//           new Card('9', 'H')
//         ]
//       };
//
//       let white = {
//         name: 'White',
//         hand: [
//           new Card('3', 'H'),
//           new Card('6', 'D'),
//           new Card('4', 'H'),
//           new Card('5', 'S'),
//           new Card('7', 'C')
//         ]
//       };
//       expect(game.play(black).versus(white)).to.be.equal('Black wins. - with straight');
//     });
//   });
});
