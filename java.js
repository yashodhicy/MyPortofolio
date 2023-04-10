const hamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobilelistlink = document.querySelectorAll('#mobilelist li a');
const cancelBtn = document.querySelector('#cancel-btn');

hamburger.addEventListener('click', () => {
  hamburger.classList.add('hide');
  cancelBtn.classList.remove('hide');
  mobileMenu.style.display = 'flex';
});

mobilelistlink.forEach((a) => {
  a.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    cancelBtn.classList.add('hide');
    hamburger.classList.remove('hide');
  });
});

cancelBtn.addEventListener('click', () => {
  cancelBtn.classList.add('hide');
  hamburger.classList.remove('hide');
  mobileMenu.style.display = 'none';
});