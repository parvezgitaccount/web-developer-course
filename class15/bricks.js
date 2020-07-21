function bricks(n) {
    if (n <= 10) {
        let protom = 15000;
        for (let i = 1; i <= n; i++) {
            let first = protom * n;
            return first;
        }
    } else if (n <= 20) {
        let secend = 12000;
        // let first = 150000;
        for (let j = 1; j < n; J++) {

            var tryf = bricks(n <= 10);
            var nextelement = tryf[n <= 1];
            tryf.push(nextelement);
            return tryf

        }

    }
}
let result = bricks(12);
console.log(result)