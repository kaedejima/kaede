const loveSubmit = document.querySelector('.sendLove');
const sendForm = document.querySelector('.sendForm');
const printArea = document.querySelector('.printArea');
const printThx = document.querySelector('#thxMes');
let resetButton;
let i = 1;

loveSubmit.addEventListener('click', checkLove);
sendForm.addEventListener('click', thxMessage);
function checkLove() {
    printArea.textContent += 'I love you, too: ' + i;
    i++;
}

function thxMessage() {
    printThx.textContent += ' Thanks for contacting me! ';
}