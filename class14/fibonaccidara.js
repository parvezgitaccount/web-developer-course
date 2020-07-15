function fibonacci(n) {
    if (n == 0) {
        return 1;
    } else if (n == 1) {
        return [0, 1];
    } else {
        var fibo = fibonacci(n - 1);
        var nextElenet = fibo[n - 1] + fibo[n - 2];
        fibo.push(nextElenet);
        return fibo;
    }
}

var result = fibonacci(10);
console.log(result)