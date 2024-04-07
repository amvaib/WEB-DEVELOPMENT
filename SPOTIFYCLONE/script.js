
let currentSong = new Audio();
let currFolder;

const circle = document.querySelector(".circle");

const songInfo = document.querySelector(".songinfo");

let songTime = document.querySelector(".songtime");

const seekbar = document.querySelector(".seekbar");

const hamburger = document.querySelector(".hamburger");

const left = document.querySelector(".left");

const close = document.querySelector(".close");

const next = document.querySelector("#next");
const previous = document.querySelector("#previous");

let songs;

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSongs(folder){
    currFolder = folder;

    let a = await fetch(`http://127.0.0.1:5500/SPOTIFYCLONE/songs/${currFolder}/`);
    let response = await a.text();

    let div = document.createElement("div");
    div.innerHTML = response;

    let as = div.getElementsByTagName("a")
    // console.log(as);

    let songs = [];

    for(let i =0; i<as.length; i++){
        const element = as[i];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split(`/${folder}/`)[1])
        }


    }

    // console.log(songs)
    return songs;



}


const playMusic = (track)=>{

    currentSong.src = `songs/${currFolder}/` + track
    
    songInfo.innerHTML = `${track.replaceAll("%20", " ")}`

    songTime.innerHTML = `00:00 / 00:00`;

    currentSong.play();
    play.src = "./img/pause.svg";


}



async function main(){



    songs = await getSongs("gta");
    
    
    let songUL = document.querySelector(".songList ul")

    for (const song of songs) {
        // Create li element
        let li = document.createElement("li");
        
        // Set inner HTML of li
        li.innerHTML = `
            <div class="songcard flex">
                <div class="songonedetail flex">
                    <img class="invert" src="./img/music.svg" alt="">
                    <div class="songdetails flex">
                        <span> ${song.replaceAll("%20", " ")}</span>
                    </div>
                </div>
                <div class="playsong flex">
                    <span>Play Now</span>
                    <img class="invert" src="./img/play.svg" alt="">
                </div>
            </div>`;

        // Append li to ul
        songUL.appendChild(li);

        li.addEventListener("click", () => {
            playMusic(song);
        });

    }


    //play pause buttons

    play.addEventListener("click", ()=>{
        if(currentSong.paused){
            play.src = "./img/pause.svg"

            currentSong.play();
        } else{
            currentSong.pause();
            play.src = "./img/play.svg"
        }
    })

    //Listen for timeupdate

    currentSong.addEventListener("timeupdate", ()=>{


        songTime.innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} : ${secondsToMinutesSeconds(currentSong.duration)}`;

        circle.style.left = (currentSong.currentTime/currentSong.duration)*100 + "%";
    })


    //seekbar

    seekbar.addEventListener("click", (e)=>{
        let percent = e.offsetX/e.target.getBoundingClientRect().width*100;
        circle.style.left = percent+ "%";
        currentSong.currentTime = ((currentSong.duration)*percent)/100;
    })

    //hamburger

    hamburger.addEventListener("click", ()=>{
        left.style.left = 0+"%";    
    })


    //close

    close.addEventListener("click", ()=>{
        left.style.left = -120 + "%";
    })
    

    //next and previous

    next.addEventListener("click", ()=>{
        currentSong.pause();
        play.src = "./img/play.svg"


        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])

        if((index+1)< songs.length -1){
            playMusic(songs[index +1])
        }

        
    })

    previous.addEventListener("click", ()=>{
        currentSong.pause();
        play.src = "./img/play.svg"



        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])

        if((index-1)>= 0){
            playMusic(songs[index -1])
        } 
        
    })






}

main();