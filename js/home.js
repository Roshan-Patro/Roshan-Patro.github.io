const resumeBtn = document.querySelector("#viewResumeButton");

// resumeBtn.onclick = ()=>{
//     window.open("https://drive.google.com/file/d/1e21ueYGnk5iwn88tFeywiy6knhU0KaUY/view?usp=sharing", '_blank');
// }

resumeBtn.addEventListener("click", openResume);


const resumeDownloadBtn = document.querySelector("#resume-button-2");
resumeDownloadBtn.addEventListener("click", openResume);

function openResume(){
    window.open("https://drive.google.com/file/d/1e21ueYGnk5iwn88tFeywiy6knhU0KaUY/view?usp=sharing", '_blank');
}