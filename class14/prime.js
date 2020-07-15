function isprime(m) {
    for (i = 2; i < m; i++) {


        if (m % i == 0) {
            return "not a prime number"
        } else {
            return "this is a prime number"
        }
    }
}
let result = isprime(139);
console.log(result)