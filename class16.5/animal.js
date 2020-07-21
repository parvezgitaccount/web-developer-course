let depth = 12;
var animal = 0;
if (depth <= 10) {
    animal = depth * 50;
    console.log(animal)
} else if (depth <= 20) {
    var firstpart = 10 * 50;
    var remining = depth - 10;
    var secendpart = remining * 100;
    animal = firstpart + secendpart;
    console.log(animal)
} else {
    let firstpart = depth * 50;
    let rimining = depth - 10;
    var secendpart = rimining * 100;
    let secendpartre = rimining - 10;
    let totalanimul = depth * 150;
    let totalamimal = totalanimul + secendpartre + firstpart;
    console.log(totalamimal)
}