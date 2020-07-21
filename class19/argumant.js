// function add() {
//     var sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         const element = arguments[i];
//         sum = sum + element;

//     }
//     return sum
// }

// let result = add(15, 45, 66);
// console.log(result)




function add(num, num1) {
    var sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum = sum + element;

    }

    function loginfo(messege) {
        console.log(messege)

    }
    loginfo("good morning ")

    var duble = sum * 2;
    return duble
}

let result = add(15, 45, 66);
console.log(result)