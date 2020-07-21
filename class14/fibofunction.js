// jodi ami sudu akta sonkar ansur ber korte chai tahole ai function use kortw hobe 
function fibonacci(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * fibonacci(n - 1)
    }
}
let result = fibonacci(5);
console.log(result);



// ata for loop ar function 

function fibo(p) {
    let log = [0, 1];
    for (let i = 2; i < p; i++) {
        log[i] = log[i - 1] + log[i - 2];

    }
    return log;
}
let ansut = fibo(10);
console.log(ansut);

// ata while loop ar function

function whilee(j) {
    let ami = [0, 1];
    let m = 2;
    while (m < j) {
        ami[m] = ami[m - 1] + ami[m - 2];

        m++;
    }
    return ami;
}

let esult = whilee(10);
console.log(esult)