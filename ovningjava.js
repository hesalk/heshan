function onClick(e) {
 var button = e.target;
 console.log("Button clicked: " + button.textContent);

}
var myButtons = document.querySelector("button");
myButtons.addEventListener("click", onClick);
var getInput = document.getElementById("myinput");
var value = getInput.value
getInput.addEventListener("change" , changeFun)
function changeFun() {
  myButtons.textContent = getInput.value
}
