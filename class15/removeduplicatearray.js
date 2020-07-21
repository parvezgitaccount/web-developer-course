// var neme = [4, 5, 6, 776, 6, 6, 5, 5443, 33, 33, 55, 66];
// var uniqueName = [];
// for (let i = 0; i < neme.length; i++) {
//     var element = neme[i];
//     var index = uniqueName.indexOf(element);
//     if (index < element) {
//         return element
//     }
// }
// console.log(uniqueName)
// var marks = ['nasir', 'kamel', 'rff', 'parvez'];

// var max = marks[0];
// for (var i = 0; i < marks.length; i++) {
//     let element = marks[i];
//     var index = marks.indexOf(element);
//     if (element < index) {
//         return element;
//     }
// }
// console.log(max)

// var arr = ['first item', 'second item is longer than the third one',
//     'third longish item'
// ];

// var lgth = 0;
// var longest;

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i].length > lgth) {
//         var lgth = arr[i].length;
//         longest = arr[i];
//     }
// }

// console.log(longest);
var arr = ["you", "are", "the", "love", "of", "my", "life"];
var sorted = arr.sort(function(a, b) {
    return a.length - b.length;
});

console.log(sorted[0])