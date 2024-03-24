const checked = document.querySelector(".check");
const nav = document.querySelector(".nav");

checked.addEventListener("click", () => {
  nav.classList.toggle(["nav--visible"]);
});

document.querySelectorAll(".btn-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;
    const targetContent = document.getElementById(targetId);
    targetContent.classList.toggle("footer__content--visible");
  });
});