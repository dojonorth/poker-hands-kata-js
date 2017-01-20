const _ = require('lodash');
const HandType = require('../HandTypes');

function check(hand) {
  const cardsGroupedByValue = _.groupBy(hand, (card) => card.value);
  const fourOfAKindGrouping = _.filter(cardsGroupedByValue, (value) => value.length == 4);
  return fourOfAKindGrouping.length == 1;
}

module.exports.check = check;
module.exports.type = HandType.FOUROFAKIND;
