
function sr(arr) {
    for (var i = 0; i < arr.length; i++) {
    let myArr = arr[i]
    if (myArr === 42) {
      value42wasfound = true;
      console.log("Meaning found at  " + i);
      break;
    }
  }
  if (value42wasfound === false) {
    console.log("not found");
  }
}
