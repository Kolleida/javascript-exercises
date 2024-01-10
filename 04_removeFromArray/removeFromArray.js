const removeFromArray = function(arr, ...args) {
    const contains = function(arr, elt) {
        for (const e of arr) {
            if (elt === e) {
                return true;
            }
        }
        return false;
    }
    for (let i = 0; i < arr.length; i++) {
        if (contains(args, arr[i])) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
