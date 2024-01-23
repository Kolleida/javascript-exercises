const fibonacci = function(n) {
    let n1 = 0;
    let n2 = 1;
    if (n < 0) {
        return "OOPS";
    } else if (n == 0) {
        return n1;
    } else if (n == 1) {
        return n2;
    } else {
        let num;
        for (let i = 2; i <= n; i++) {
            num = n1 + n2;
            n1 = n2;
            n2 = num;
        }
        return num;
    }
};

// Do not edit below this line
module.exports = fibonacci;
