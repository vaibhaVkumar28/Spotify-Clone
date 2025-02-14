// console.log("Welcome to Spopify")

// Initializing varaibles
let songindex=0;
let audioElement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songitem=Array.from(document.getElementsByClassName('songitem'));
let mastersongname=document.getElementById('mastersongname');



let songs=[
    {songName:"NCS-1",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"NCS-2",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"NCS-3",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"NCS-4",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"NCS-5",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"NCS-6",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"NCS-7",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"NCS-8",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"NCS-9",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"NCS-10",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},
]

songitem.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("Songname")[0].innerText=songs[i].songName;
})

// Handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

// listen to event
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate')
    // update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    // console.log(progress)
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=(myprogressbar.value*audioElement.duration)/100;
})

const makeallplays =()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeallplays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songindex+1}.mp3`;
        // audioElement.src='songs/3.mp3';
        mastersongname.innerText=songs[songindex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0)songindex=9;
    else songindex-=1;
    audioElement.src=`songs/${songindex+1}.mp3`;
    // audioElement.src='songs/3.mp3';
    mastersongname.innerText=songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})

document.getElementById('forward').addEventListener('click',()=>{
    if(songindex>=9)songindex=0;
    else songindex+=1;
    audioElement.src=`songs/${songindex+1}.mp3`;
    // audioElement.src='songs/3.mp3';
    mastersongname.innerText=songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})