// Changing navbar's background upon scrolling
let nav = document.querySelector('#nav-menu');

 changenavBack();

 window.addEventListener('scroll', changenavBack);
 function changenavBack()
 {
     if (window.scrollY >= 25) {
         nav.classList.add('active_nav');
     } else {
         nav.classList.remove('active_nav');
     }
 }

//  Activating hamburger menu
const body = document.querySelector("body");
const navbar = document.querySelector("#nav-menu");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const resumeBtnOnNavbar = document.querySelector("#resume-button-1");

// resumeBtnOnNavbar.onclick = () =>{
//     window.open("https://drive.google.com/file/d/1e21ueYGnk5iwn88tFeywiy6knhU0KaUY/view?usp=sharing", '_blank');
// }

resumeBtnOnNavbar.addEventListener("click", openResume);

function openResume(){
    window.open("https://drive.google.com/file/d/1e21ueYGnk5iwn88tFeywiy6knhU0KaUY/view?usp=sharing", '_blank');
}

menuBtn.onclick = ()=>{
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
}

cancelBtn.onclick = ()=>{
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
}