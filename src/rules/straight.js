const HandType = require('../HandTypes');

function check(hand) {
  let sortedHand = hand.map(card => card.weight).sort();
  return sortedHand[hand.length - 1] - sortedHand[0] == hand.length - 1;
}

module.exports.check = check;
module.exports.type = HandType.STRAIGHT;
