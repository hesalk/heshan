function mf () {
var div = document.querySelector("#no-text");
var p = document.createElement("p");
p.textContent = "HelloWorld";
console.log();
div.appendChild(p);
var main = document.querySelector("main")
var rmv = document.querySelectorAll(".remove-me");
for (var i = 0; i < rmv.length; i++) {
  main.removeChild(rmv[i]);
  }
  }
function ff () {
  var firstbtn = document.querySelector("button");

}



 function onClick(e) {
  var button = e.target;
  console.log("Button clicked: " + button.textContent);
 }
 var myButtons = document.querySelectorAll("button");
 for (var i = 0; i < myButtons.length; i++) {
 var button = myButtons[i];
 button.addEventListener("click", onClick);
 }
