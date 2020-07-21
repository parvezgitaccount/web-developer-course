function getMin(arr) {
    // if (!arr) {
    //     return null;
    // }
    var minV = arr[0];
    for (a of arr) {
        if (a < minV) minV = a;
    }
    return [minV];
}

console.log(getMin(['parvez ', 'salma', 'nasir', "shakhawat", "ira", "tangina", "murad"]));