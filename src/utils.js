function add(a, b) { return a + b; }

function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

function multiply(a, b) { return a * b; }

function isEven(n) { return n % 2 === 0; }
function secret() {
  return 'untested';
}

module.exports = { add, divide, multiply, isEven };
