const TIME_DISPLAY = document.querySelector('#timeDisplay');
const DATE_DISPLAY = document.querySelector('#dateDisplay');
const MESSAGE_DISPLAY = document.querySelector('#messageDisplay');
const DATE = new Date();


function updateTime() {
    const currentTime = `${DATE.getHours()}:${DATE.getMinutes()}:${DATE.getSeconds()}`;
    TIME_DISPLAY.innerHTML = currentTime;
}

function updateDate() {
    let currentDay = DATE.getDate();
    if (currentDay <= 9) {
        currentDay = `0${currentDay}`;
    }
    let currentMonth = DATE.getMonth();
    if (currentMonth <= 9) {
        currentMonth = `0${currentMonth}`;
    }
    const currentDate = `${currentDay}:${currentMonth}:${DATE.getFullYear()}`;
    DATE_DISPLAY.innerHTML = currentDate;
}

function updateMessage() {
    const messages = ['Good Morning', 'Good Afternoon', 'Good Evening', 'Good Night'];
    if (DATE.getHours() < 12) {
        MESSAGE_DISPLAY.innerHTML = messages[0];
    } else if (DATE.getHours() >= 12 && DATE.getHours() < 17) {
        MESSAGE_DISPLAY.innerHTML = messages[1];
    } else if (DATE.getHours() >= 17 && DATE.getHours() < 21) {
        MESSAGE_DISPLAY.innerHTML = messages[2];
    } else if (DATE.getHours() >= 21) {
        MESSAGE_DISPLAY.innerHTML = messages[3];
    }
}

export {updateTime, updateDate, updateMessage};