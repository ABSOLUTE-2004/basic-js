const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // Установим значения по умолчанию для параметров
  const {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;

  const strToRepeat = String(str);
  const additionToRepeat = String(addition);

  // Создаем повторяющуюся строку addition
  const repeatedAddition = Array(additionRepeatTimes)
    .fill(additionToRepeat)
    .join(additionSeparator);

  // Создаем повторяющуюся строку str с дополнением
  const result = Array(repeatTimes)
    .fill(strToRepeat + repeatedAddition)
    .join(separator);

  return result;
}

module.exports = {
  repeater,
};
