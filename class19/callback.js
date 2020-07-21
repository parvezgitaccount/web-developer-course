function explain_callback(name, age, tast) {
    console.log("Hello", name);
    console.log("your Age", age);
    // Washhand()
    // console.log("your age is ", age);
    // console.log(tast)
    tast()
}

function Washhand() {
    console.log('wash hand with shop')
}

function takeshawer() {
    console.log("wash a shhwer")
}

function skroolfacebook() {
    console.log("scrool facebook but dont link ayyay")
}
explain_callback("sogir Uddin", 17, Washhand);
explain_callback("kobir uddin", 28, takeshawer)
explain_callback("romjam ali", 25, skroolfacebook)