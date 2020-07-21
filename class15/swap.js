// temp diye jodi a,i swap korte chai

let a = 5;
let b = 7;
console.log("before swap :a =", a, "b =:", b)
var temp = a;
a = b;
b = temp;

console.log("after swap a:", a, "b=:", b);


// anather way how to result swap
let c = 2;
let d = 8;

[d, c] = [c, d]
console.log(c, d)