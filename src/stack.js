const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = []; // хранилище элементов
  }

  push(element) {
    this.items.push(element); // добавление элемента в стек
  }

  pop() {
    return this.items.pop(); // возврат верхнего элемента стека и его удаление
  }

  peek() {
    return this.items[this.items.length - 1]; // возврат верхнего элемента стека без удаления
  }
}


module.exports = {
  Stack
};
