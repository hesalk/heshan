
function vwtb1() {
  document.getElementById("div1").setAttribute("style", "display: block;");
  document.getElementById("div2").setAttribute("style", "display: none;");
  document.getElementById("div3").setAttribute("style", "display: none;");
}
function vwtb2() {
  document.getElementById("div1").setAttribute("style", "display: none;");
  document.getElementById("div2").setAttribute("style", "display: block;");
  document.getElementById("div3").setAttribute("style", "display: none;");
}
function vwtb3() {
  document.getElementById("div1").setAttribute("style", "display: none;");
  document.getElementById("div2").setAttribute("style", "display: none;");
  document.getElementById("div3").setAttribute("style", "display: block;");
}
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
p1.addEventListener("click", vwtb1);
p2.addEventListener("click", vwtb2);
p3.addEventListener("click", vwtb3);
