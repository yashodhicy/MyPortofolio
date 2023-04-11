const hamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobilelistlink = document.querySelectorAll('#mobilelist li a');
const cancelBtn = document.querySelector('#cancel-btn');

const toggleMobileMenu = () => {
 hamburger.classList.toggle('hide');
 cancelBtn.classList.toggle('hide');
 mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
}

const hideMobileMenu = () => {
 hamburger.classList.remove('hide');
 cancelBtn.classList.add('hide');
 mobileMenu.style.display = 'none';
}

hamburger.addEventListener('click', toggleMobileMenu);

mobilelistlink.forEach((a) => {
 a.addEventListener('click', hideMobileMenu);
});

cancelBtn.addEventListener('click', hideMobileMenu);