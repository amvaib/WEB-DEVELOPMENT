const heading = document.querySelector('h1');

window.addEventListener('keydown',(e)=>{
    if(e.key === ' '){
        heading.innerHTML = "Space";
    } else{
        heading.innerHTML = e.key;
    }
})