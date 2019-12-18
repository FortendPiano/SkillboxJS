/* Написать программу, которая выводит текущую дату в полном русскоязычном формате,
например: “Сегодня 8 декабря 2018 года, суббота, 20 часов 6 минут 54 секунды”.
Следует обратить внимание на правильные склонения слов “час”, “минута”, “секунда”. 

Продвинутый уровень: с помощью стандартной функции setInterval сделать так,
чтобы сформированная строка с датой и временем отображалась в консоли каждую секунду. */
let dateObj = new Date(),

    year = dateObj.getFullYear(),
    mohth = dateObj.getMonth(),
    dayNum = dateObj.getDate(),
    dayWeek = dateObj.getDay(),

    hours = dateObj.getHours(),
    minutes = dateObj.getMinutes(),
    seconds = dateObj.getSeconds();

let monthName = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

let dayWeekName = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];


function changeHours() {
    const reference = "час";
    if (hours === 1 || hours === 21) {
        return reference;
    } else if (hours > 5 && hours < 21 || hours === 0) {
        return reference + "ов";
    } else {
        return reference + "а";
    }
}
function changeMinSec(time, string) {
    const reference = string;

    if (time > 1 && time < 5 || time % 10 > 1 && time % 10 < 5 && time > 21) {
        return reference + "ы";
    } else if (time === 1 || time % 10 === 1 && time !== 11) {
        return reference + "а";
    } else if(time >= 11 && time <= 20) {
        return reference;
    } else {
        return reference;
    }
}


let output = (`Сегодня ${dayNum} ${monthName[mohth]} ${year} года, ${dayWeekName[dayWeek]}, ${hours} ${changeHours()} ${minutes} ${changeMinSec(minutes, "минут")} ${seconds} ${changeMinSec(seconds, "секунд")}.`);

console.log(output);




/* setInterval(function () {
    for(let i = seconds; i < 60; i++) {
        if(i == 59) {
            i = 0;
            console.log(output);
        } else {
            i++;
            console.log(output, seconds);
        }
    }
    
}, 1000); */


