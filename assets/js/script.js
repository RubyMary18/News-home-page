const menuBtn = document.querySelector('.hamburger-menu');
const closeBtn = document.querySelector('.hamburger-close');
const nav = document.querySelector('.right-nav');
const hamburger = document.querySelector('.hamburger');

menuBtn.addEventListener('click', () => {
    if(nav.classList.contains('hide')){
        nav.classList.remove('hide');
    }
    nav.classList.add('show');
    if(nav.classList.contains('show')){
        menuBtn.classList.remove('show');
        menuBtn.classList.add('hide');
    }
    closeBtn.classList.remove('hide');
    closeBtn.classList.add('show');
})

closeBtn.addEventListener('click', () => {
    nav.classList.remove('show');
    nav.classList.add('hide');
    if (nav.classList.contains('hide')) {
        closeBtn.classList.remove('show');
        closeBtn.classList.add('hide');
        menuBtn.classList.remove('hide');
        menuBtn.classList.add('show');
    }
})