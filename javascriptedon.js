function mf () {
var div = document.querySelector("#no-text");
var p = document.createElement("p");
p.textContent = "HelloWorld";
div.appendChild(p);
var main = document.querySelector("main")
var rmv = document.querySelectorAll(".remove-me");
for (var i = 0; i < rmv.length; i++) {
  main.removeChild(rmv[i]);
  }
  }
