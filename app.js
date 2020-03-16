const button = document.querySelector('.generate');
const color = document.querySelector('.color');

button.addEventListener('click', setColor);
color.addEventListener('click', copy);

function setColor () {
 let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
 
 document.body.style.backgroundColor = randomColor;
 color.innerText = randomColor;
}

function copy () {
 let text = color.innerText;
 let input = document.createElement('input');
 input.setAttribute('value', text);
 document.body.appendChild(input);
 input.select();
 
 document.execCommand('copy');
 document.body.removeChild(input);
 
 alert('Copied: ' + text);
}
