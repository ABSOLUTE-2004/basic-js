const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const charCount = {};

  // Подсчитываем частоту каждого символа в строке s1
  for (let char of s1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let commonCount = 0;

  // Проверяем символы строки s2 и считаем общие символы
  for (let char of s2) {
    if (charCount[char] && charCount[char] > 0) {
      commonCount++;
      charCount[char]--;
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount,
};
