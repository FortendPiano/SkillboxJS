let firstName = prompt("Ваше имя: "),
    lastName = prompt("Ваша фамилия: "),
    birthYear = prompt("Введите Ваш год рождения: "),
    currentYear = new Date().getFullYear(),
    age = currentYear - birthYear;

    if(age < 20) {
        alert("Привет, " + firstName + " " + lastName + "!");
    } else if (age >= 20 && age < 40) {
        alert("Добрый день, " + firstName + " " + lastName + "!");
    } else {
        alert("Здравствуйте, " + firstName + " " + lastName + "!");
    }