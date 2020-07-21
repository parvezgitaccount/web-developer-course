// this is febonacci element 



function fibo(n) {
    let fibo = [0, 1];
    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo
}
let result = fibo(12);
console.log(result);



// un function fibo nancci 

// var unfobo = [0, 1];
// for (let l = 2; l <= 10; l++) {
//     unfobo[l] = unfobo[l - 1] + unfobo[l - 2];
//     console.log(unfobo[l], unfobo[l - 1], unfobo[l - 2])
// }


var fibo = [0, 1];

for (let i = 2; i < 11; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    console.log(fibo)
}



var wii = [0, 1];
var koto = 2;
while (koto < 10) {

    wii[koto] = wii[koto - 1] + wii[koto - 2];
    console.log(koto, wii);
    koto++;
}