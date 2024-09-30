let hr=0;
let min=0;
let sec=0;
let paused=true;
let timer;


let timeDisplay=document.getElementById('stopwatch');
let startWatch=document.getElementById('start');
let pauseWatch=document.getElementById('pause');
let resetWatch=document.getElementById('reset');
let lapTime=document.getElementById('lap');
let lapseRec=document.getElementById('lapseRec');
lapseRec.classList.add('lapsedTimes');

startWatch.addEventListener('click',stopwatch);
pauseWatch.addEventListener('click',pause);
resetWatch.addEventListener('click',initialState);
lapTime.addEventListener('click',Lapse);

function initialState(){
    hr=0;
    min=0;
    sec=0;
    lapseRec.innerHTML="";
   displayTime();
   
}


function stopwatch(){
  
    sec++;
     if(sec==60){
        min++;
        sec=0;
      
     }
     if(min==60){
        hr++;
        min=0;
     }
    
    displayTime();
   
   timer=setTimeout(stopwatch,1000);

   
   
   
     
}

function pause(){
   clearInterval(timer);
}
function displayTime(){
    let frmHour=hr.toString().padStart(2,'0');
    let frmMin=min.toString().padStart(2,'0');
    let frmSec=sec.toString().padStart(2,'0');
   
  timeDisplay.innerHTML=frmHour+":"+frmMin+":"+frmSec;
}

function Lapse(){
   let lapses=document.createElement('div');

   clearInterval(timer);
   let frmHour=hr.toString().padStart(2,'0');
    let frmMin=min.toString().padStart(2,'0');
    let frmSec=sec.toString().padStart(2,'0');
   
  lapses.innerHTML=frmHour+":"+frmMin+":"+frmSec;
   lapseRec.appendChild(lapses);
   stopwatch();
}
initialState();