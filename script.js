
let timer = document.getElementById("StartTime");
var hr = 0;
var min = 0;
var sec = 0;
var ms = 0;
var pausetime = true;

function startTimer() {
  if (pausetime == true) {
    pausetime = false;
    timerCycle();
  }
}
function pauseTimer() {
  if (pausetime == false) {
    pausetime = true;
  }
}
function resetTimer() {
  timer.innerHTML = "00:00:00:000";
  pausetime = true;
  hr = 0;
  sec = 0;
  min = 0;
   ms = 0;
}
function timerCycle() {
  if (pausetime == false) {
    ms = parseInt(ms);
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    ms += 10;
    if (ms === 1000) {
      sec++;
      ms = 0;
    }
      if (sec == 60) {
        min++;
        sec = 0;
      }

        if (min == 60) {
          hr++;
          min = 0;
          sec = 0;
        }
      
  


    let mili = ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms;
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (hr < 10) {
      hr = "0" + hr;
    }

    timer.innerHTML = hr + ":" + min + ":" + sec + ":" + ms;

    setTimeout("timerCycle()", 1);
  }
}


 
