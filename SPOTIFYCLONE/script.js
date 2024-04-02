

async function getSongs(){

    let a = await fetch("http://127.0.0.1:5500/SPOTIFYCLONE/songs/");
    let response = await a.text();
    // console.log(response);

    let div = document.createElement("div");
    div.innerHTML = response;

    let as = div.getElementsByTagName("a")
    // console.log(as);

    let songs = [];

    for(let i =0; i<as.length; i++){
        const element = as[i];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split("/songs/")[1])
        }


    }

    // console.log(songs)
    return songs;



}




async function main(){

    let songs = await getSongs();
    console.log(songs);

    //Play the first song
    var audio = new Audio(songs[0]);
    // audio.play();

    audio.addEventListener("loadeddata",()=>{
        console.log(audio.duration, audio.currentSrc, audio.currentTime);
    })

    let songUL = document.querySelector(".songList").getElementsByTagName('li')[0];

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
    }








}

main();