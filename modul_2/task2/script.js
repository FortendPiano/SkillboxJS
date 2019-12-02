let start = prompt("Введите начальный год: "),
    end = prompt("Введите конечный год: ");

function countLeapYear(a, b) {
    for (let i = a; i <= b; i++) {
        if (((i % 4 == 0) && (i % 100 != 0)) || (i % 400 == 0)) {
            console.log(i);
        }
    }
}

if(start < end) {
    countLeapYear(start, end);
} else if(start > end) {
    countLeapYear(end, start);
} else {
    alert("Даты одинаковы.");
}