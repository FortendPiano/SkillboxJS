let question;
let countSum = 0;

/* while(question !== null) {
    
    question = prompt("Введите число: ");

    if(question === "" || isNaN(+question)) {
        countSum += 0;
    } else if(question === null) {
        alert(countSum);
        alert("Вы нажали отмена");
    } else {
        countSum += +question;
    }
} */

do {
    question = prompt("Введите число: ");

    if(question === "" || isNaN(+question)) {
        countSum += 0;
    } else if(question === null) {
        alert("Сумма введеных чисел: " + countSum);
        alert("Вы нажали отмена");
    } else {
        countSum += +question;
    }
} while(question !== null);