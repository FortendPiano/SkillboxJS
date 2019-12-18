function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let a = getRandomInt(1, 1000);
let answer;


function checkRandNumber() {
    answer = prompt("Угадайте загаданное число!");
    console.log(answer);
    console.log("число: " + a);

    if (!isNaN(parseFloat(answer)) && isFinite(answer)) {
        if (+answer < a) {
            alert("Больше!");
            checkRandNumber();
        } else if (+answer > a) {
            alert("Меньше!");
            checkRandNumber();
        } else if (+answer === a) {
            alert("Правильно!");
            let b = confirm("Хотите попробовать еще раз?");
            if (b) {
                a = getRandomInt(1, 10);
                checkRandNumber();
            }
        } else if (isNaN(answer)) {
            alert("Введи число");
            checkRandNumber();
        } else {
            alert("Что-то пошло не так(");
        }
    } else {
        if(answer === null) {
            return;
        } else {
            alert("Вы ввели недопустимое значение");
            checkRandNumber();
        }
        
    } 
}
checkRandNumber();

/* while (answer !== null) {

    answer = prompt("Угадайте загаданное число!");
    console.log(answer);

    if (answer !== '' && answer !== null) {
        if (+answer < a) {
            alert("Больше!");
        } else if (+answer > a) {
            alert("Меньше!");
        } else if (+answer === a) {
            alert("Правильно!");
            let b = confirm("Хотите попробовать еще раз?");
            if (b === false) {
                break;
            } else {
                a = getRandomInt(1, 10);
            }
        } else if (isNaN(answer)) {
            alert("Введи число");
        } else {
            alert("bad");
        }
    } else if (answer === "") {
        alert("Вы ввели пустую строку");
    } else {
        break;
    }
} */





