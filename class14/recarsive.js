// this is recorsive function 


function factroial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factroial(n - 1);
    }
}
let result = factroial(10)
console.log(result)