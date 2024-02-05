const checked = document.querySelector('.check');
const nav = document.querySelector('.nav');
const list1 = document.querySelector('.nav__list--primary');

checked.addEventListener('click', () => {
  nav.classList.toggle(['nav--visible']);
  list1.classList.toggle(['delay-primary']);
})