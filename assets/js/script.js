const menuBtn = document.querySelector('.hamburger-menu'),
      closeBtn = document.querySelector('.hamburger-close'),
      nav = document.querySelector('.right-nav'),
      hamburger = document.querySelector('.hamburger'),
      body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    closeBtn.classList.toggle('open');
    body.classList.toggle('open');
})

closeBtn.addEventListener('click', () => {
    nav.classList.toggle('close');
    closeBtn.classList.toggle('close');
    body.classList.toggle('close');

})