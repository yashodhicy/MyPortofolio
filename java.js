const hamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobilelist = document.getElementById('mobilelist');
const mobilelistlink = document.querySelectorAll('#mobilelist li a');
const cancelBtn = document.querySelector('#cancel-btn');

console.log(mobileMenu);
hamburger.addEventListener('click',function() {
    hamburger.classList.add('hide');
    cancelBtn.classList.remove('hide');
    mobileMenu.style.display= 'flex';

});

for (const a of mobilelistlink) {
    a.addEventListener('click',function() {
        mobileMenu.style.display= 'none';
        console.log('link clicked');
        cancelBtn.classList.add('hide');
        hamburger.classList.remove('hide');
    });
}

cancelBtn.addEventListener('click',function(){
    cancelBtn.classList.add('hide');
    hamburger.classList.remove('hide');
    mobileMenu.style.display = "none";
    
});