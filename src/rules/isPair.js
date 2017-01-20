const handOperations = require('./handOperations');
const HandType = require('../HandTypes');

function check(hand) {
  return handOperations.numberOfPairs(hand) == 1;
}

module.exports.check = check;
module.exports.type = HandType.PAIR;
