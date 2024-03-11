const checked = document.querySelector('.check');
const nav = document.querySelector('.nav');

checked.addEventListener('click', () => {
  nav.classList.toggle(['nav--visible']);
})