const Birthday = "2 Jan 2022";
const daysPr = document.getElementById("days");
const hoursPr = document.getElementById("hours");
const minutesPr = document.getElementById("minutes");
const secondsPr = document.getElementById("seconds");

function countdown(){
    const currentDate = new Date();
    const birthdayDate = new Date(Birthday);

    const totalseconds = (birthdayDate-currentDate)/1000;
    console.log(totalseconds);
    
    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600) % 24;
    const minutes = Math.floor(totalseconds/60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    daysPr.innerHTML =days;
    hoursPr.innerHTML =formatTime(hours);
    minutesPr.innerHTML =formatTime(minutes);
    secondsPr.innerHTML =formatTime(seconds);
    

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown()

setInterval(countdown,1000)