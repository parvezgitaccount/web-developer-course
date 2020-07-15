function fibacci(n) {
    if (n == 0) {
        return 0
    }
    if (n == 1) {
        return 1
    } else {
        return fibacci(n - 1) + fibacci(n - 2);

    }
}
let result = fibacci(3);
console.log(result)