const randomColor = function(){
    const hex = '123456789ABCDEF';
    let color = '#';
    for(let i = 0; i<6;i++){
        color += hex[Math.floor(Math.random()*16)];

    }
    return color;

}


let intervalId;

const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor,500)
    }

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    
    }
}

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

start.addEventListener('click',startChangingColor,false)
stop.addEventListener('click',stopChangingColor,false)
