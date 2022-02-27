const clock = document.querySelector("#clock");
const dat = document.querySelector("#date");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const years = String(date.getFullYear());
    const months = String(date.getMonth()+1).padStart(2, "0");
    const days = String(date.getDate()).padStart(2, "0");
    const dates = date.toString().slice(0,3).toUpperCase();

    clock.innerText = `${hours}:${minutes}:${seconds}`;
    dat.innerText = `${years}/${months}/${days} ${dates}`;
}
console.dir(date);
//setInterval(sayHello, 5000); //milisecond 5초
//setTimeout(sayHello, 5000);
getClock();
setInterval(getClock, 1000);