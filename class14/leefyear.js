// console.log(2020 / 4)
const year = 2000;
remainder = year % 4;
console.log(remainder);
if (remainder == 0) {
    console.log("this is leep year")
} else {
    console.log("this is not leep  year")
}


// anather system 
let ami = 1000;
torefols = ami / 4;
console.log(torefols);




function leleepyear(years) {
    const tuttype = years % 4;
    if (tuttype == 0) {
        return "this a leap year on midiul"
    } else {
        return "this not leap year"
    }
}
const chekc = leleepyear(1705);
console.log(chekc)