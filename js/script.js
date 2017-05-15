(function() {
'use strict';

var modal = document.getElementById('modal'),
    openBtn = document.getElementById('open-modal'),
    closeBtn = document.getElementById('close-modal'),
    emailInp = document.getElementById('email'),
    nameInp = document.getElementById('name'),
    textInp = document.getElementById('text'),
    form = document.getElementById('modal-form');

if (openBtn) openBtn.addEventListener('click', open);
if (closeBtn) closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', keyClose);

function open(e) {
  modal.classList.add('show-modal');
  nameInp.value = localStorage.getItem('name') || '';
  emailInp.value = localStorage.getItem('email') || '';
  nameInp.focus();
  e.preventDefault();
}

function close(e) {
  modal.classList.remove('show-modal');
  e.preventDefault();
}

function keyClose(e) {
  if (e.keyCode === 27 && modal.classList.contains('show-modal')) {
    modal.classList.remove('show-modal');
  }
}

form.addEventListener('submit', checkForm);

function checkForm(e) {
  if (!nameInp.value && !textInp.value && !emailInp.value) {
    alert('Заполните хотя бы одно поле!');
    e.preventDefault();
    return false;
}

localStorage.setItem('name', nameInp.value);
localStorage.setItem('email', emailInp.value);
  alert('Сообщение получено, спасибо.');
}
})();