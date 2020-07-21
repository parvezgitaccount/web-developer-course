function factroialway(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;


    }
    return fact
}
let result = factroialway(5);
console.log(result);


// this is tactroieal way 


function factorialREuraive(num) {
    if (num == 1) {
        return 1
    } else {
        return num * factorialREuraive(num - 1)
    }
}

let ansur = factorialREuraive(5);
console.log(ansur)