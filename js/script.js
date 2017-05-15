(function() {
var modal = document.getElementById('modal');
var openBtn = document.getElementById('open-modal');
var closeBtn = document.getElementById('close-modal');
var emailInp = document.getElementById('email');
var nameInp = document.getElementById('name');
var textInp = document.getElementById('text');
var form = document.getElementById('modal-form');

openBtn.addEventListener('click', open);
closeBtn.addEventListener('click', close);
document.addEventListener('keydown', keyClose);

function open(e) {
  modal.classList.add('show-modal');
  nameInp.focus();
  e.preventDefault();
}

function close(e) {
  modal.classList.remove('show-modal');
  e.preventDefault();
}

function keyClose(e) {
  if (e.keyCode === 27) {
    modal.classList.remove('show-modal');
  }
}

form.addEventListener('submit', checkForm);

function checkForm(e) {
  if (nameInp.value && textInp.value && emailInp.value) {
   return true;
  }
  return false;
} 
}());