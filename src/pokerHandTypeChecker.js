const rules = require('./rules');

const descending = (leftRule, rightRule) => rightRule.type.weight - leftRule.type.weight;

const rulesThatAppliedTo = (hand) => (rule) => rule.check(hand);

function applyTo(hand) {
  return rules
    .filter(rulesThatAppliedTo(hand))
    .sort(descending)[0]
    .type;
}

function check(hand) {
    return applyTo(hand);
}

module.exports.check = check;
