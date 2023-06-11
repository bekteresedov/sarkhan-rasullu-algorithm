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

// 7.
// Verilen string-in tersi ile duzunun bir birine beraber olub olmadigi

// const a = "SOS";

// let result = "";
// for (let i = 0; i < a.length; i++) {
//   result += a[a.length - i - 1];
// }

// console.log(a === result);

// ----------------------------------------------------------------

// 8. Daxil edilen reqemlerin tersi ile duzunun eyni olub olmadigini teyin eden method yazin
// Meselen 545 ve 545  duzdur amma 574 475 sehvdir

// let eded = 123;

// let ters = 0;

// while (eded > 0) {
//   let qaliq = eded % 10;
//   ters *= 10;
//   ters += qaliq;
//   eded = eded / 10;
//   eded = parseInt(eded);
// }
// console.log(ters === eded);

// ----------------------------------------------------------------
// 9.Method 1 reqem, bir simvol ve 1 boolean qebul edir.
// public static void foo(int defe, char simvol, boolean altAlta)

// foo(3,’F’, true);
// F
// F
// F
// foo(3,’F’, false); FFF

// a qeder c simvolunu chap etsin. altAlta dəyişəni true-dursa altAlta eks halda yan yana chap etsin.

// function foo(reqem, simvol, bool) {
//   let res = "";
//   for (let i = 0; i < reqem; i++) {
//     console.log();
//   }
// }

// foo(3, "a", true);

// ------------------------------------------------------------------------------------------------
// 10.method 3 reqem qebul edir a,b,c,
// public static void foo(int a, int b, int c)

// a-dan b-ye qeder butun ededleri c qeder quvvete yukseldir Math.pow-dan istifadə edərək

// foo(1,5,2) ->   1^2=1;  2^2=4; 3^2=9, 4^2=16, 5^2=25

// function foo(a, b, c) {
//   for (var i = a; i <= b; i++) {
//     console.log(Math.pow(i, c));
//   }
// }

// foo(1, 10, 3);

// ----------------------------------------------------------------

// 12.methoda daxil edilen reqemin musbet, menfi yoxsa 0 oldugunu teyin eden method yazin.
// Eger menfidirse method geriye -1 qaytarsin, 0-dirsa 0, musbetdirse +1 qaytarsin.

// function foo(a) {
//   if (a > 0) return 1;
//   else if (a === 0) return 0;
//   else return -1;
// }

// console.log(foo(-10));

// ----------------------------------------------------------------

// 13. Methoda 4 reqem daxil edilir eger bu reqemlerden her hansisa 2-si bir birine beraberdirse geriye true qaytarsin. Tip: Massiv istifade edin
// 4 5 3 6

// function foo(a, b, c, d) {
//   var array = [a, b, c, d];
//   for (var i = 0; i < array.length - 1; i++) {
//     for (var j = i + 1; j < array.length; j++) {
//       if (array[i] === array[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// console.log(foo(21, 21, 3, 10));

// ----------------------------------------------------------------

// 14. Methoda 4 reqem daxil edilir.a,b,c,d  eger ededler artan ardicilliqla daxil edilibse geriye true qaytarsin eks halda false
// 4 5 6 2

// function foo(a, b, c, d) {
//   var array = [a, b, c, d];
//   for (var i = 0; i < array.length - 1; i++) {
//     for (var j = i + 1; j < array.length; j++) {
//       if (array[i] > array[j]) return false;
//     }
//   }
//   return true;
// }

// console.log(foo(231, 311, 336, 1030));

// ----------------------------------------------------------------

// 15. Method bir String ve bir int qebul edir ve hemin String-in hemin index-inde olan simvolunu qaytarsin.
// Meselen: method(“Salam”, 4)  m herfini return edecek

// function foo(str, int) {
//   return str.charAt(int);
// }

// console.log(foo("Salam", 4));

// ----------------------------------------------------------------

// 16.  Method 2 String qebul edir ve onlarin beraber olub olmadigini return edir true ve ya false
// method(“Salam”,”Salam”);

// function foo(str1, str2) {
//   return str1 === str2;
// }

// console.log(foo("Salam", "Salam"));

// ----------------------------------------------------------------

// 17.Method String s, char c, int count qebul edir.  S-i count qeder c ile birleshdirir ve geriye return edir

// foo(String s, char c, int count){}

// foo(“Soz”, ‘c’, 5); -> Sozccccc

// function foo(s, c, count) {
//   for (var i = 0; i < count; i++) {
//     s += c;
//   }
//   return s;
// }

// console.log(foo("Soz", "c", 5));

// ----------------------------------------------------------------

// 18. Method 3 String qebul edir.  String a, String b, String c.
// A ve b-nin ichinde c varsa onda true eks halda false

// function foo(a, b, c) {
//   if (a.includes(c) && b.includes(c)) return true;
//   return false;
// }

// console.log(foo("Alma Armud", "Armud Heyva Alma", "Armud"));

// ----------------------------------------------------------------

// 19.method String a, int begin, int end daxil edilir.     A-nin begin ve end arasini alt alta chap edir.
// (“Hello World”, 3,7) netice olacaq:
// l

// o
// W
// function foo(a, b, e) {
//   for (var i = b; i < e; i++) {
//     console.log(a[i]);
//   }
// }
// console.log(foo("Hello world!", 3, 7));

// ----------------------------------------------------------------

// 20.2 soz daxil edilir uzunlugu boyuk olan String geriye return edilir.
// “Hello”, “Hello World”  -> Hello World return olacaq

// function foo(s1, s2) {
//   return s1.length > s2.length
//     ? s1
//     : s1.length === s2.length
//     ? "Beraberdiler"
//     : s2;
// }

// console.log(foo("Hello, world!", "Hello, world!"));

// ----------------------------------------------------------------
// 21.Ele bir method yazin ki:  HeLLo WorlD-> chevrilsin olsun hEllO wORLd.
// Yeni boyuk herfler kichikle, kichik herfler boyukle evez olsun
// hint:  ya ASCII ←--interviewlarda bu ustun tutulur
// Ya da String-in funksiyalari: toLowerCase(), toUpperCase() istifade edin

// function foo(s) {
//   var array = s.split("");
//   for (var i = 0; i < array.length; i++) {
//     if (array[i].toUpperCase() === array[i]) array[i] = array[i].toLowerCase();
//     else array[i] = array[i].toUpperCase();
//   }
//   return array.join("");
// }

// console.log(foo("AlmA"));

// ----------------------------------------------------------------

// 22.
// ”       Salam    necesen        ishler nece          gedir       “   ←-----   metnini
// “Salam necesen ishler nece gedir” ←--------      halina getirin.

// var str = `       Salam    necesen        ishler nece          gedir       `;
// str = str.split(" ");
// var result = "";
// for (var i = 0; i < str.length; i++) {
//   if (str[i] !== "") {
//     result += str[i] + " ";
//   }
// }
// console.log(result.trim());
