let i = 1;
let factorial = 1;
while (i <= 10) {

    factorial = factorial * i;
    console.log(i, factorial);
    i++
}

let forloo = 1;

for (let m = 1; m <= 10; m++) {
    forloo = forloo * m;
    console.log(m, forloo);

}

function result(num) {

    let gun = 1;
    for (var g = 1; g <= num; g++) {
        gun = gun * g;

    }
    return gun;


}
let ansar = result(10)
console.log(ansar);


// while loop 

function whileloop(num) {
    let gun1 = 1;
    let p = 1;
    while (p <= num) {
        gun1 = gun1 * p;
        p++
    }
    return gun1;
}

let resul = whileloop(50);
console.log(resul);