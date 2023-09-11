const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");
const days = document.querySelector(".days");

const date = new Date();
console.log(date);

let defSecs = 59-date.getSeconds();
let defMins = 59-date.getMinutes();
let defHours = 23-date.getHours();
let defDays = 31-date.getDate();

const timeFunction = setInterval(() => {
    defSecs--;
    if(defSecs < 0) {
        defMins--;
        defSecs = 59;
    }
    if(defMins < 0) {
        defHours--;
        defMins = 59;
    }
    if(defHours < 0) {
        defDays--;
        defHours = 23;
    }

    if(defDays == 0) {
        clearInterval(timeFunction);
    }

    seconds.innerHTML = defSecs < 10 ? `0${defSecs}` : defSecs;
    minutes.innerHTML = defMins < 10 ? `0${defMins}` : defMins;
    hours.innerHTML = defHours < 10 ? `0${defHours}` : defHours;
    days.innerHTML = defDays < 10 ? `0${defDays}` : defDays;
}, 1000);