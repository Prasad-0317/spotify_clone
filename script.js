// console.log("Welcome to Spotify..");

let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let progressBar = document.getElementById('progressBar')
let masterPlay = document.getElementById('font play')
let gif = document.getElementById('gif')
let songItems = Array.from(document.getElementsByClassName("musicContainer musicName"))
let masterSongName = document.getElementById('masterSongName')
let miPlay = Array.from(document.getElementsByClassName('miPlay'))

let songs=[
    {songName:"Kesari ke laal",filepath:"songs/1.mp3",coverpath:"images/img1.png"},
    {songName:"Rudra Shiva Mantra",filepath:"songs/2.mp3",coverpath:"images/img2.jpg"},
    {songName:"Jai Shree Ram Prabha",filepath:"songs/3.mp3",coverpath:"images/img3.jpg"},
    {songName:"Kousalya Dashrath Nandan",filepath:"songs/4.mp3",coverpath:"images/img4.jpg"},
    {songName:"Badal Barsa Bijuli | Nepali",filepath:"songs/5.mp3",coverpath:"images/img5.jpg"}, 
]

songItems.forEach((element,i) => {
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverpath;
    element.getElementsByClassName('songName')[0].innerHTML=songs[i].songName;
});

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        masterSongName.innerText= songs[songIndex].songName;
        audioElement.play();
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')
        gif.style.opacity=1
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause')
        masterPlay.classList.add('fa-play')
        gif.style.opacity=0
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration) *100)
    progressBar.value = progress
})

progressBar.addEventListener('change',()=>{
    audioElement.currentTime=(progressBar.value*audioElement.duration)/100
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('miPlay')).forEach((element)=>{
        element.classList.add('fa-play');
        element.classList.remove('fa-pause');
    })
}

Array.from(document.getElementsByClassName('miPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause') 
        gif.style.opacity=1
    })
})

document.getElementById('font forward').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex=4;
    }else{
        songIndex++;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause') 
    gif.style.opacity=1
})

document.getElementById('font backward').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex--;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause') 
    gif.style.opacity=1
})

miPlay.forEach(element => {
    element.addEventListener('click',()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
            masterSongName.innerText= songs[songIndex].songName;
            audioElement.play();
            miPlay.classList.remove('fa-play')
            miPlay.classList.add('fa-pause')
            gif.style.opacity=1
        }
        else{
            audioElement.pause();
            miPlay.classList.remove('fa-pause')
            miPlay.classList.add('fa-play')
            gif.style.opacity=0
        }
    })
});