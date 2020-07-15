function loopsystem(num) {
    let gun = 1;

    for (i = 1; i < num; i++) {
        gun = gun * i;
    }
    return gun;
}
let ansar = loopsystem(6);
console.log(ansar);



function whiloop(num) {
    let j = 1;
    let b = 1;
    while (j < num) {
        b = b + j;
        j++;

    }
    return b
}
let output = whiloop(5);
console.log(output);