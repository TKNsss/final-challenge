const button = document.querySelector('.header-top__button');
const nav = document.querySelector('.nav');

button.addEventListener('click', () => {
  nav.classList.toggle(['nav--visible']);
});