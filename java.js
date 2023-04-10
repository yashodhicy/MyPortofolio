let btn = document.querySelector('.menu');
let mobileMenu = document.getElementById('desktop-nav');
let mobilelist = document.getElementById('mobilelist');
console.log(mobileMenu);
btn.addEventListener('click',function() {
    mobileMenu.style.display= 'flex';
    mobilelist.style.display = 'flex';
    mobilelist.style['flex-direction']= "column";
    mobileMenu.style.justifyContent ="left";
    mobileMenu.style.background = 'white';
    mobileMenu.style.height = '100vh';
    mobileMenu.style.position = 'fixed';
    mobileMenu.style.top = 0;
    mobileMenu.style.zIndex='999';
    // mobileMenu.style.content= 'url(icon-Cancel.png)';
    
    
});

