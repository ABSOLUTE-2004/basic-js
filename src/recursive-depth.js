const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0; // Если аргумент не является массивом, возвращаем глубину 0
    }

    let maxDepth = 1; // Начальная глубина равна 1

    for (let element of arr) {
      if (Array.isArray(element)) {
        // Если элемент является массивом, вычисляем его глубину рекурсивно
        const depth = this.calculateDepth(element) + 1;
        if (depth > maxDepth) {
          maxDepth = depth;
        }
      }
    }

    return maxDepth;
  }
}

module.exports = {
  DepthCalculator,
};
