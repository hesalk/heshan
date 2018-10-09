


function longestWord(sentence) {
    var arr = sentence.split(" ");
    var longest = 0;
    var word;
  for (var i = 0; i < arr.length; i++) {
        if (longest < arr[i].length) {

            longest = arr[i].length;
            word = arr[i];
console.log(arr[i].length);
console.log(arr[i]);
        }
    }

    return word;
}
longestWord("I loveld fgdfg JavaScript fldjg dfjgttttttd dfjg ");
//The first way to do it
function reverse(str){
 if(str === ""){
  return str
 }else{
  return reverse(str.substr(1)) + str[0]
 }
}
// Another way
function reverse(str){
  return str.split("").reverse().join("");
}

// Hellox
function hellox(str){
console.log(str); }

//Triangel
var arr = ["#"];

for (var i = 9; i >= 0  ; i--) {
 arr.push("#")
 console.log(arr.join(""))
}

//Palindrom
var wrod ;
function reverse(str){
  var word =  str.split("").reverse().join("");
  if (str === word) {console.log("true");}
    else {
      console.log("false");
    }
  }
//wordcount
function count(str){
 return str.split(" ").length;
 }
 // minimum
 function arrayMin(arr) {
   var len = arr.length;
   var min = Infinity;
   while (len--) {
     if (arr[len] < min) {
       min = arr[len];
     }
   }
   return min;
 };
 //maximium
 function arrayMax(arr) {
   var len = arr.length;
   var max = -Infinity;
   while (len--) {
     if (arr[len] > max) {
       max = arr[len];
     }
   }
   return max;
 };
//power
function powers(arr, power){
 for(var i = 0; i < arr.length; i++){
   arr[i] = Math.pow(arr[i], power);  //Math.pow = x upphöjt till y //
 }
 return arr;
}
console.log(powers([1,2,3], 2)); // [1, 4, 9]//

// var arrObject = {
//   arr: [0,0,0],
//   pwr: 3,
// }
//
// function powers([arr], x){
//   console.log(math.pow([arr], x));
//   var arr = [5,5,5]
//   var x = 9
//   }
//   console.log(powers);
//object
var myObject = {
 name:"Viktor",
 age:26,
 };
 console.log(myObject);
function logPerson(myObject) {
console.log("Name:"+myObject.name, "Age: "+myObject.age);
}
//adder
function myFuc (){
  var num = prompt("pleas enter the nymber");
  var num2 = prompt("pleas enter the sec nymber");
  var sum = parseInt(num)+parseInt(num2); //prompt ge tillbaka en string
  alert (sum)
}

//Bracket validation
function brecketValidation (fr,sc,th) {

  if (fr === "[({})]") {
    console.log("True");}
    else {
      console.log("false");
    }

  }

  brecketValidation("[({})]");
