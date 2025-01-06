const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  const removedIndices = new Set(); // Множество для отслеживания удаленных элементов

  const commands = {
    "--discard-next": (i) => {
      if (i + 1 < arr.length) {
        removedIndices.add(i + 1); // Отмечаем следующий элемент как удаленный
      }
      return i + 1;
    },
    "--discard-prev": (i) => {
      if (i - 1 >= 0 && !removedIndices.has(i - 1)) {
        result.pop();
      }
      return i;
    },
    "--double-next": (i, array) => {
      if (i + 1 < array.length && !removedIndices.has(i + 1)) {
        result.push(array[i + 1]);
      }
      return i;
    },
    "--double-prev": (i, array) => {
      if (i - 1 >= 0 && !removedIndices.has(i - 1)) {
        result.push(array[i - 1]);
      }
      return i;
    },
  };

  for (let i = 0; i < arr.length; i++) {
    const action = commands[arr[i]];
    if (action) {
      i = action(i, arr);
    } else if (!removedIndices.has(i)) {
      result.push(arr[i]);
    }
  }

  return result;
}

module.exports = {
  transform,
};
