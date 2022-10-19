

let nav = document.querySelector('.navbar');

 changenavBack();

 window.addEventListener('scroll', changenavBack);
 function changenavBack()
 {
     if (window.scrollY >= 100) {
         nav.classList.add('active_nav');
     } else {
         nav.classList.remove('active_nav');
     }
 }