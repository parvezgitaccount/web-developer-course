function reversestriog(str) {
    var revaece = "";
    for (let i = 0; i < str.length; i++) {
        var char = str[i];
        revaece = char + revaece;
    }
    return revaece;
}
var parvez = "hello world"
var foralien = reversestriog(parvez);
console.log(foralien);