const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('active');
});
const slider = document.querySelector('.slider');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const pause = document.querySelector('.pause');

let index = 0;
let interval = setInterval(() => {
  index++;
  if (index > 3) {
    index = 0;
  }
  slide();
}, 3000);

function slide() {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

prev.addEventListener('click', () => {
  index--;
  if (index < 0) {
    index = 3;
  }
  slide();
});

next.addEventListener