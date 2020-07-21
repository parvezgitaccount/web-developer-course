let speech = "i am a good persion .I dont snore ai night"
var count = 0;
for (let i = 0; i < speech.length; i++) {
    var charactor = speech[i];
    if (charactor == " " && speech[i - 1] != " ") {
        count++
    }

}
count++
console.log(count)