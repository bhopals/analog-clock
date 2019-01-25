const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function runTheClock() {
    var date = new Date();
    console.log(date);
    
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log("Hour:" + hr + " Minute: " + min + " Seconds: " + sec);
    
    let secPosition = sec*360/60;
    let minPosition = (min*360/60) + (secPosition/60);
    let hrPosition = (hr*360/12) + (minPosition/12);
    
    
    console.log("Hour :" + hrPosition + " Minute: " + minPosition + " Seconds: " + secPosition);
    
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
    
    var element = document.getElementById("digital-clock");
    element.innerHTML =  hr + " : " + min + " : " + sec;
}

var interval = setInterval(runTheClock, 1000);
console.log(interval);
