const loveSubmit = document.querySelector('.sendLove');
const sendForm = document.querySelector('.sendForm');
const printArea = document.querySelector('.printArea');
const printThx = document.querySelector('#thxMes');
let resetButton;
let i = 1;

function checkLove() {
    printArea.textContent += 'I love you, too: ' + i;
    i++;
}
loveSubmit.addEventListener('click', checkLove);

function thxMessage() {
    printThx.textContent += ' Thanks for contacting me! ';
}
sendForm.addEventListener('click', thxMessage);