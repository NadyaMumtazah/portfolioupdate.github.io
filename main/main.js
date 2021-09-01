(function showDate() {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'Desember'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const today = new Date();
    let thisDate = today.getDate();
    let day = today.getDay();
    let thisDay = days[day];
    let month = today.getMonth();
    let thisMonth = months[month];
    
    let date = document.querySelector('.date');
    date.innerHTML = thisDay + ' , ' + today.getDate() + ' ' + thisMonth + ' ' + today.getFullYear();
}());

function loadAppear(){
    let profile = document.querySelector('.profile');
    profile.classList.add('content-appear');
}
function reveal(){
    let reveals = document.querySelectorAll('.reveal');
    for(let i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('content-appear');
        }
        else {
            reveals[i].classList.remove('content-appear');
        }
    }
}

window.addEventListener('DOMContentLoaded', loadAppear);
window.addEventListener('scroll', reveal);



