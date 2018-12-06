function doubleAll(arr) {
    return arr.map(x => x * 2);
  }


function removeNumbersOverX(arr, x) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      let value = arr[i];
      if (value <= x) {
        newArray.push(value);
      }
    }
    return newArray;
  }
  function sum(arr) {
    return arr.reduce(function(acc, x) {
      return acc + x;
    });
  }
let arr1 = [10, 20, 30, 40, 50];
let rmvarr = removeNumbersOverX (arr1, 30)
console.log(rmvarr);
let dblfun = doubleAll(rmvarr);
console.log(dblfun);
let sumall = sum(dblfun);
console.log(sumall);
let result = sum(doubleAll(removeNumbersOverX([10, 20, 30, 40, 50], 30)));
console.log(result);

