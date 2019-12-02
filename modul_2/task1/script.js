let firstNumber = prompt("Введите первое число: "),
    twoNumber = prompt("Введите второе число: ");

if (firstNumber !== null && firstNumber !== "" && twoNumber !== null && twoNumber !== "") {
    if (+twoNumber < +firstNumber) {
        alert("Первое число " + firstNumber + " больше второго " + twoNumber);
    } else if(twoNumber === firstNumber) {
        alert(`Числа ${firstNumber} и ${twoNumber} равны`);
    } else if(+twoNumber > +firstNumber) {
        alert("Второе число " + twoNumber + " больше первого " + firstNumber);
    } else {
        alert("Вы что-то не так сделали.");
    }
}