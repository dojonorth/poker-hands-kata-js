const highCardRule = require('./isHighCard');
const pairRule = require('./isPair');
const twoPairRule = require('./twoPairs');
const threeOfAKind = require('./threeOfAKind');
const straight = require('./straight');
const flush = require('./flush');
const fullHouse = require('./fullHouse');
const fourOfAKind = require('./fourOfAKind');
const straightFlush = require('./straightFlush');

const rules = [
  highCardRule,
  pairRule,
  twoPairRule,
  threeOfAKind,
  straight,
  flush,
  fullHouse,
  fourOfAKind,
  straightFlush
];

module.exports = rules;
