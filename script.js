let greetings = document.querySelector('.name > h1');
const myName = "Hello! I'm Nadya Mumtazah";
let i = 0;
(function type(){
    if(i<myName.length){
        greetings.innerHTML += myName.charAt(i);
        i++;
    }
    setTimeout(type, 200);
}());
