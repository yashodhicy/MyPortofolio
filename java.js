let btn = document.querySelector('.menu');
let mobileMenu = document.getElementById('desktop-nav');
let mobilelist = document.getElementById('mobilelist');
let mobilelistlink = document.querySelectorAll('#mobilelist li a');

console.log(mobileMenu);
btn.addEventListener('click',function() {
    mobileMenu.style.display= 'flex';
    mobileMenu.style.justifyContent ="left";
    mobileMenu.style.background = 'white';
    mobileMenu.style.height = '100vh';
    mobileMenu.style.position = 'fixed';
    mobileMenu.style.order = '1';
    mobileMenu.style.top = 0;
    mobileMenu.style.zIndex='999';

    mobilelist.style.display = 'flex';
    mobilelist.style['flex-direction']= "column";
    mobilelist.style['gap']= "12px";
    mobilelist.style['margin-top']= "20px";
});

for (const a of mobilelistlink) {
    a.addEventListener('click',function() {
        mobileMenu.style.display= 'none';
        console.log('link clicked');
    });
}

