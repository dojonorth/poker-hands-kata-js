const HandType = require('../HandTypes');
const handOperations = require('./handOperations');

const isThreeTimes = (element, list) => handOperations.isRepeated(element, list, 3);
const hasNotCheckedBefore = (element, checkedElements) => handOperations.notContains(element, checkedElements);

function check(hand) {
  let checkedElements = [];
  hand.forEach(function (element, index, elements) {
      if(hasNotCheckedBefore(element, checkedElements) && isThreeTimes(element, elements)) {
        checkedElements.push(element);
      }
  });
  return checkedElements.length == 1;
}

module.exports.check = check;
module.exports.type = HandType.THREEOFAKIND;
