 function defoult(n) {
     let i = 1;
     let gun = 1;
     while (i <= n) {
         gun = gun * i;
         i++;


     }
     return gun;
 }

 let whileloovalue = defoult(5);
 console.log(whileloovalue)


 //  let i = 1;
 //  let defoult = 1;
 //  while (i <= 5) {
 //      defoult = defoult * i;
 //      //  console.log(i, defoult);
 //      i++;
 //  }

 //  console.log(defoult);


 //  this is for loop functon factroieal 

 function result(num) {
     let l = 1;
     let barbejeta = 1;
     for (let l = 1; l <= num; l++) {
         barbejeta = barbejeta * l;
     }
     return barbejeta;

 }
 let resultcode = result(10)
 console.log(resultcode);