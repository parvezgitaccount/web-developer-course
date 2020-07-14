let student = { id: 121, phone: 0175, name: "parvez" };
let student2 = { id: 125, phone: 2121, name: "nasir" }


// phone Nme chenge 
student.phone = 25455;
student.name = "kosa"
    // 2nd way 
student2["phone"] = 111111;
// 3rd way 


student2.cinema = "kadija amare baca"


// 1st way 
// let phone = student.phone;

// 2nd way 
// let phone = student["phone"]

// 3rd way 
let phonestunum = "phone";
let phone = student[phonestunum]


console.log(phone);





console.log(student);
console.log(student2);