//OBJECT
var crono = document.getElementById('btn_crono');
var rel = document.getElementById('btn_rel');
var play_crono = document.getElementById('btn_play_crono');
var pause_crono = document.getElementById('btn_pause_crono');
var stop_crono = document.getElementById('btn_stop_crono');
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var Sc = 0;
var Mc = 0;
var Hc = 0;
//TIMER
let interval = setInterval(clock, 1);
let timer_stop_crono = setInterval(time_stop_crono_F, 1);
let crono_count;
//DOCUMENT START
rel.disabled = true;
play_crono.hidden = true;
pause_crono.hidden = true;
stop_crono.hidden = true;

//FUNCTIONS
function clock(){
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    if(s < 10){
        s = "0"+s;
    }
    if(m < 10){
        m = "0"+m;
    }
    if(h < 10){
        h = "0"+h;
    }

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
};

function crono_time(){
    Sc++;
    if(Sc == 60){
        Mc++;
        Sc = 0;
        if(Mc == 60){
            Hc++;
            Mc = 0;
            if(Hc == 24){
                Hc = 0;
            }
        }
    }
    if(Sc < 10){
        seconds.innerHTML = "0"+Sc;
    }else{
        seconds.innerHTML = Sc;
    }
    if(Mc < 10){
        minutes.innerHTML = "0"+Mc;
    }else{
        minutes.innerHTML = Mc;
    }
    if(Hc < 10){
        hours.innerHTML = "0"+Hc;
    }else{
        hours.innerHTML = Hc;
    }
};

function time_stop_crono_F(){
    if(Sc != 0){
        stop_crono.disabled = false;
    }else{
        stop_crono.disabled = true;
    }
};

crono.onclick = function(){
    clearInterval(interval);
    crono.disabled = true;
    rel.disabled = false;
    if(Sc < 10){
        seconds.innerHTML = "0"+Sc;
    }else{
        seconds.innerHTML = Sc;
    }
    if(Mc < 10){
        minutes.innerHTML = "0"+Mc;
    }else{
        minutes.innerHTML = Mc;
    }
    if(Hc < 10){
        hours.innerHTML = "0"+Hc;
    }else{
        hours.innerHTML = Hc;
    }
    play_crono.hidden = false;
    pause_crono.hidden = false;
    stop_crono.hidden = false;
    pause_crono.disabled = true;
    play_crono.disabled = false;
};

rel.onclick = function(){
    interval = setInterval(clock, 1);
    rel.disabled = true;
    crono.disabled = false;
    clearInterval(crono_count);
    play_crono.hidden = true;
    pause_crono.hidden = true;
    stop_crono.hidden = true;
};

play_crono.onclick = function(){
    crono_count = setInterval(crono_time, 1000);
    play_crono.disabled = true;
    pause_crono.disabled = false;
};

pause_crono.onclick = function(){
    clearInterval(crono_count);
    play_crono.disabled = false;
    pause_crono.disabled = true;
};

stop_crono.onclick = function(){
    clearInterval(crono_count);
    Sc = 0;
    Mc = 0;
    Hc = 0;
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    pause_crono.disabled = true;
    play_crono.disabled = false;
};
//<element onclick="myScript">
// object.onclick = function(){myScript};
// object.addEventListener("click", myScript);
