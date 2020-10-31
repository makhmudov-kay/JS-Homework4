// Задание на возраст
function sum() {
    let x = year - age
    return x
}

let name = prompt('Введите ваше имя');
let age = +prompt('Введите ваш год рождения');
let year = +prompt('Введите нынешний год');

console.log(name + ", " + "Ваш возраст " + sum());

/* Задание 2: (Рондомные примеры)
Пользователь вводит количество решаемых им примеров
И функции Пользователю отдает рандомные числа и рандомные знаки для решаемых примеров
После примера отдается сообщение:
Ваш ответ верный - 2 
или
Ваш ответ не верный - 2! Правильный ответ - 3! */

var a = +prompt('Сколько примеров вы хотите решить?');
function rand(max){
    return Math.floor(Math.random() * max);
}
var max = 20;
var b = rand(max);
var c = rand(max);

for (i = 0; i < a; i++) {
    var b = rand(max);
    var c = rand(max);

    if (b < 5 || c < 3) {
        var sum = b + c;
        var d = prompt("Дайте правильный ответ:" + b + "+" + c + "=");
    } else if (b > 5 && c < 6) {
        var sum = b - c;
        var d = prompt("Дайте правильный ответ:" + b + "-" + c + "=");
    } else if (b > 10 || b < 15 && c < 10) {
        var sum = b * c;
        var d = prompt("Дайте правильный ответ:" + b + "*" + c + "=");
    } else if (b > 15 && c < 5) {
        var sum = b / c;
        var d = prompt("Дайте правильный ответ:" + b + "/" + c + "=");
    }

    if (sum == d){
        console.log("Ваш ответ верный - " + sum);
    } else {
        console.log("Ваш ответ не верный - " + d + "!" + " Верный ответ - " + sum + "!");
    }
}




