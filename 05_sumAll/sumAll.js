const sumAll = function(n1, n2) {
    if (!Number.isInteger(n1) || !Number.isInteger(n2) || n1 < 0 || n2 < 0) {
        return "ERROR";
    }
    return (Math.abs(n2 - n1) + 1) * (n1 + n2) / 2;
};

// Do not edit below this line
module.exports = sumAll;
