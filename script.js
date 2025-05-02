let is24hour = false;

function updateClock(){
    const now = new Date();
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const dayName = days[now.getDay()];
    document.getElementById("day").innerText=dayName;

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm='';

    if(!is24hour){
        ampm=hours >= 12? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours :12;
    }

    hours = hours < 10?'0'+hours :hours;
    minutes= minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds} ${is24hour?'':ampm}`;
    document.getElementById("clock").innerText= timeString;
}

    function toggleFormat(){
        is24hour = !is24hour;
        const btn =document.querySelector('button');
        btn.innerText = is24hour ? 'Switch to 12-Hour Format' : 'Switch to 24-Hour Format';
        updateClock();
    }
    setInterval(updateClock,1000);
    updateClock();

