const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(arr) {
    let result = 0;
	for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
};

const multiply = function(args) {
    let result = 1;
	for (let i = 0; i < args.length; i++) {
        result *= args[i];
    }
    return result;
};

const power = function(n1, n2) {
	return n1 ** n2;
};

const factorial = function(n) {
	let result = 1;
	for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
