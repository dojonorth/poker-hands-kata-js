const hasAPair = require('./isPair').check;
const hasAThree = require('./threeOfAKind').check;
const HandType = require('../HandTypes');

function check(hand) {
  return hasAPair(hand) && hasAThree(hand);
}

module.exports.check = check;
module.exports.type = HandType.FULLHOUSE;
