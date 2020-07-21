var marks = [34, 55, 67, 78, 856, 45];

var max = marks[0];
for (var i = 0; i < marks.length; i++) {
    let element = marks[i];
    var index = marks.indexOf(element);
    if (element > max) {
        max = element;
    }
}
console.log(max)