// HAMBURGER MENU JS
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', function() {
  document.body.classList.toggle('nav-open');
});


const closeAfterClickSession = querySelector('.nav-link');
closeAfterClickSession.addEventListener('click', () =>{
    document.removeClass('nav-open'); 
});
