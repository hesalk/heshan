// var i = 0
// for ( i = 0; i < 20; i++) {
//   console.log("HelloWorld");
// }
// var t=0;
// for (var i = 0; i <= 100; i++) {
//
//       t += i
//
//
//     }
//
// console.log(t);
// var t=0;
// for (var i = 1; i < 100;i=i+2) {
//
//       t += i
//
//
// }
// console.log(t);
// var x = []
// for (var i = 0; i <= 100; i++) {
//   x.push (i)}
//   console.log(x);
//
//
// for (var i = 0; i < 100; i++) {
//   x[i] = x[i] *2;}
//   console.log(x);
function isBetween (x, from, to) {
return x >= from && x <= to;}

console.log(isBetween(100, 0, 20));

function range(from, to) {
  var myArray = [];
  for (var i = 0; i < 10; i++) {
    myArray.push(i);
  }
  return myArray;}
  console.log(range(3, 10));
