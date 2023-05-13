// 1. 0-dan verilmish edede qeder butun 2-ye tam bolune bilen ededleri chap et.  Ipucu: % ve / istifade edeceksiniz.

// meselen: 5 daxil edirem. 0,2 ve 4 reqemleri 2-ye bolunur

// User enters a number and application must find and print all numbers which can be divided by 2 between zero and that given number.
// For example:
// Our given number is 5
// Answer must be 0,2,4. Because each of these numbers can be divided by 2
// Hint: use % and / operators

// let number = Number(prompt("enter number"));
// for (let i = 0; i <= number; i++) {
//   if (i % 2 == 0) console.log(i);
// }
// ----------------------------------------------------------------

// 2.1:
// Verilen ededin sade olub olmadigini teyin edin.
// Eded ancaq ozune ve 1-e bolunurse edede sade eded deyilir. meselen: 3 reqemi  3-e yeni ozune ve 1-e bolunur ancaq 4  reqemi 4-e yeni ozune, 1-e ve elave olaraq 2-ye de bolunur.  Ipucu: % ve / istifade edeceksiniz

// let number = Number(prompt("enter number"));
// let bool = false;
// if (number == 0 || number == 1) {
//   alert("0 ve 1 ne sade nede murekkeb deyil");
// }
// for (let i = 2; i < number; i++) {
//   if (number % i == 0) {
//     bool = true;
//     break;
//   }
// }
// console.log(
//   bool ? "daxil olunan reqem murekkebdir" : "daxil olunan reqem sadedir"
// );

// ----------------------------------------------------------------
// 2.2.
// 0-dan verilmish edede qeder sade ededleri chap et.

// Verilen ededin sade olub olmadigini teyin edin
// Eded ancaq ozune ve 1-e bolunurse edede sade eded deyilir. meselen: 3 reqemi  3-e yeni ozune ve 1-e bolunur ancaq 4  reqemi 4-e yeni ozune, 1-e ve elave olaraq 2-ye de bolunur.  Ipucu: % ve / istifade edeceksiniz.

// let number = Number(prompt("enter number"));
// if (number == 0 || number == 1) {
//   alert("0 ve 1 ne sade nede murekkeb deyil");
// }
// for (let i = 2; i <= number; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }

// function isPrime(number) {
//   for (let i = 2; i < number; i++) {
//     if (number % i != 0) return true;
//   }
//   return false;
// }

//----------------------------------------------------------------
// Verilmish ededin butun ededleri cemini tap.
// Ipucu: %, / ve while istifade edeceksiniz Mes: 12345 olarsa 1+2+3+4+5

// let number = Number(prompt("enter number"));

// let sum = 0;
// while (number > 0) {
//   let qaliq = number % 10;
//   sum += qaliq;
//   sum = parseInt(sum);
//   number /= 10;
// }
// console.log("Result: ", sum);

//----------------------------------------------------------------
// 4.
// 3-cu deyishenden istifade etmeden 2 deyishenin yerini deyishmek
// x=new Scanner(Sytem.in).nextInt(); js prompt
// y=new Scanner(Sytem.in).nextInt();
// sout(“x=”+x); js log
// sout(“y=”+y);

// let x = Number(prompt("enter  x"));
// let y = Number(prompt("enter  y"));
// x = x + y;
// y = x - y;
// x = x - y;
// console.log("x=", x, "y=", y);

//----------------------------------------------------------------
// 5.
// Ededin reqemlerinin sayini tapin.//12345
// let number = Number(prompt("enter number"));
// let count = 0;
// while (number > 0) {
//   number /= 10;
//   number = parseInt(number);
//   count++;
// }
// console.log("Result: ", count);

//----------------------------------------------------------------
// 6.1
// Fordan istifade ederek (rekursiya olmadan) Faktorial <- cox chetindir bu :) ama ugurlar
// 5! = 5*4*3*2*1;
// let number = Number(prompt("enter number"));
// let factorial = 1;
// while (number > 0) {
//   factorial *= number;
//   number--;
// }
// console.log("factorial: ", factorial);

//----------------------------------------------------------------
// 6.2
// Fordan istifade etmeden (rekursiya ile) Faktorial <- cox chetindir bu :) ama ugurlar
// 5! = 5*4*3*2*1;
// let number = Number(prompt("enter number"));
// function factorial(num) {
//   if (num === 0) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// }
// console.log(factorial(5));

//----------------------------------------------------------------
