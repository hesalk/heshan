/* let nameInput = document.querySelector('input[name="name"]');
console.log(nameInput.value);
nameInput.addEventListener("change", nameVald)
function nameVald(event) {
    if (nameInput.value === "") {
        console.log(false);
          alert("You must have name");
          event.preventDefault();
    }
    else{console.log(true);
    }
}
let ageInput = document.querySelector('input[name="age"]');
ageInput.addEventListener("change", ageVald);


function ageVald() {
    let ageValue = parseInt(ageInput.value) ;
    if (isNaN(ageValue)) {
        ageInput.value = "";
        console.log("false");
        alert("You must have number");
    }else{console.log("true");
    }
    if (ageValue < 15) {
        ageInput.value = "";
        alert("You must be at least 15 to login");
    }
    if (ageValue > 150) {
        ageInput.value = "";
        alert("Enter a valid age");
               
    }
}
let myBtn = document.querySelector('button');
myBtn.addEventListener('click', nameVald);
myBtn.addEventListener('click', ageVald); */
//Not all ready yet

// How the teacher made it

let form = document.querySelector('form');
let name = document.querySelector('input[name="name"]');
let age = document.querySelector('input[name="age"]');
let username = document.querySelector('input[name="username"]');
let password = document.querySelector('input[name="password"]');
let passwordRepeat = document.querySelector('input[name="passwordRepeat"]');
form.addEventListener('submit', validate)
function validate(e) {
    if (name.value === "") {
        alert("Enter a name")
        e.preventDefault();
    }
    let ageValue = parseInt(age.value)
    if (age.value === "" || isNaN(ageValue) || ageValue < 0 || ageValue > 100) {
        alert('Wrong age')
        e.preventDefault();

    }
    //and so continue 
}