/* Написать простую программу авторизации. 
Создать массив users, в котором каждый элемент –
это объект типа “пользователь” 
со свойствами “имя”, “логин” и “пароль”.
Программа должна запрашивать у пользователя логин и пароль при помощи prompt,
после чего проходить по массиву users и искать в нем объект с такими же значениями.
Если пользователь найден в массиве users, то программа должна поздороваться с ним по имени.
В противном случае должна появиться ошибка авторизации. */


let btnSign = document.querySelector('.sign-in'),
    btnReg = document.querySelector('.registr');

let users = [
    {
        name: 'Андрей',
        login: 'andrey123',
        password: 'qwerty',
        admin: true,
        private: true
    }, {
        name: 'Настя',
        login: 'nastya2001',
        password: '123456',
        given: ''
    }, {
        name: 'Марина',
        login: 'mArInE',
        password: 'q1w2e3'
    }, {
        name: 'Максим',
        login: 'MCDuck',
        password: 'asdfhj'
    }, {
        name: 'Леонид',
        login: 'leo',
        password: 'zaxcvs3'
    }];
console.log(users);

function checkProperty() {
    let loginIn = prompt("Введите Ваш логин"),
        passwordIn = prompt("Введите Ваш пароль");
    let isFlag = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i]["login"] === loginIn && users[i]["password"] === passwordIn) {
            alert("Привет " + users[i]["name"]);
            isFlag = true;
        } 
    }
    if(!isFlag) {
        alert("Пользователь не найден!");
    }
}

function createNewUser() {
    let name = prompt("Как Ваше имя?"),
        login = prompt("Придумайте логин: "),
        password = prompt("Придумайте пароль: ");
    users.push({ name, login, password });
}

btnReg.addEventListener('click', createNewUser);
btnSign.addEventListener('click', checkProperty);
 

