const toggle = document.querySelector("input");
const years = document.querySelectorAll(".years");
const months = document.querySelectorAll(".months");

const checked = function () {
  years.forEach((y) => y.classList.toggle("hide"));
  months.forEach((e) => e.classList.toggle("hide"));
};
toggle.addEventListener("click", checked);
let i = 2;
document.addEventListener("keydown", function () {
  if (i % 2 === 0) {
    toggle.checked = true;
  } else {
    toggle.checked = false;
  }
  years.forEach((y) => y.classList.toggle("hide"));
  months.forEach((e) => e.classList.toggle("hide"));
  i += 1;
});
