const display = document.querySelector('#pantalla');
const buttons = document.querySelectorAll('button');
buttons.forEach((item) => {
item.onclick = () => {
if (item.id == 'limpiar') {
display.innerText = '';
} else if (item.id == 'borrar') {
let string = display.innerText.toString();
display.innerText = string.substr(0, string.length - 1);
}else if (display.innerText != '' && item.id == 'igual') {
display.innerText = eval(display.innerText);
}else if (display.innerText == '' && item.id == 'igual') {
display.innerText = 'Empty!';
setTimeout(() => (display.innerText = ''), 2000);
}else {
display.innerText += item.id;
}
}
})
const btnCambiaTema = document.querySelector('.tema-alternador');
const calculador = document.querySelector('.oscuro');
const alernadorIcono = document.querySelector('.alternador-icono');
let esOscuro = true;
btnCambiaTema.onclick = () => {
calculador.classList.toggle('oscuro');
btnCambiaTema.classList.toggle('activador');
esOscuro = !esOscuro;
}