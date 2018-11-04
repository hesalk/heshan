function onClick(e) {
  let text = e.target.textContent;
  let container = document.querySelectorAll('.container');
  container.style.background = text;
  if (text = "Red") {
    container.style['color'] = 'white';
  } else {
    container.style['color'] = 'black';
  }
}

let buttons = document.querySelectorAll('buttons');
for (let button in buttons) {
  button.addEventListener('click', onClick);
}
