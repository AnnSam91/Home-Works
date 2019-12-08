"use strict"

//Логический оператор НЕ (!)

let result = true;

console.log( result ); //true
console.log( !result ); //false

/*
    1) В начале произойдет преобразование к булевому значению
    2) Переворачивает значение наоборот
*/

console.log( !false ); // true

// Двойной восклицательный знак используется для преобразования к булевому значению

console.log( !!'non-empty string' ); //true - тоже самое что Boolean('non-empty string')

/*
    Приоритет восклицательного знака самый большой среди логических операторов, он будет выполняться перед 
    операторами && и ||
*/

if( !result === false ){ // true (!result равно false)
    // выполнится
}




//Циклы while

// Используются для повтторения однотипных действий

let number = 0;

while (number < 10 ){
    console.log(number);
    number++;
}

/*
    Итерация - одно выполнение тела цикла.
*/

let number2 = 3;

while(  number2 ){
    console.log( number2 );
    number2--;
}

// Цикл do...while

/*
    Тоже самое что while, только проверка условия происходит в конце итерации
    Сначала выпонится тело цикла, а потом проверка условия
*/

let number3 = 0;

do{
    console.log( number3 );
    number3++;  
} while( number3 < 3);

// Тело цикла выполнится хотя бы один раз 100%

// Цикл for

for (let i = 0; i < 3; i++){
    console.log('Коробка' + i);
}

/*
    for (начало; условие; шаг){...тело цикла...}

    1) Начало - выполнится один раз в начале цикла.
    2) Условие - проверяется перед каждой итерацией
    3) Шаг - выполняется перед каждой итерацией
    4) Тело цикла - выполняется безконечно пока условие true
*/

let b;

for(b = 0; b < 3; b++){

}

console.log(b); //3

// console.log(i); - это ошибка, переменные объявленые внутри скобок не видны за их пределами

// Посмотреть раздел 'Пропуск частей for'




//Прерывание цикла (break)

let number4 = 0;

while(true){
    let value = +prompt('Введите число', '');

    if(!value){break;}

    number4+=value;
}

console.log(number4); // сумма веденных чисел



// Переход к следующей итерации (continue)

/*
    continue - это облегченная версия break. При ее выполнении цикл не останавливается,
    а просто переходит к слелующей итерации
*/

for(let i = 0; i < 10; i++){
    if(i%2 == 0){continue}

    console.log(i);
}

/*
    break и continue нельзя использовать в тернарном операторе
*/

// Конструкция switch

/*
    Конструкция switch заменяет собой сразу несколько if
*/

let n = 1;
let number5 = 4;

switch(number5){
    case 3:
        console.log('Маловато');
        break;
    case 4:
        console.log('В точку');
        break;
    case 5:
    case n + 4:
        console.log('Перебор');
        break;
    default:
        console.log('Нет таких значений');
}

/*
    Кейсы записаные один под другим - называются группировкой кейсов.
    Обычно они выполняют одно и тоже действие.

    Значение в switch сравниваются по строгому равенству!!!
*/





// Функции

function showMessage(){
    console.log('Привет'); //тело функции
}

showMessage();
showMessage();

// Локальные переменные функции

/*
    Это переменные объявленные внутри функции.
    Это переменные которые не доступны снаружи функции.
*/

function showMessage2(){
    let name = 'Иван';

    console.log(`привет ${name}`);
}

showMessage2();

// console.log(name); - будет ошибка, т.к. переменная не доступна за пределами функции

// Внешние переменные
// У функции есть доступ ко всем внешним переменным

let userName = 'Петр';

function showMessage3(){
    console.log('Привет ' + userName);
}

showMessage3();

/*
    Помимо доступа к переменным - все что произойдет с переменной внутри сохраняется 
    Т.е. у функции есть возможность изменять переменные.
*/

function showMessage4(){
    userName = 'Александр';

    console.log('Привет ' + userName);
}

console.log(userName); //Петр
showMessage4();
console.log(userName); // Александр

let user = 'Андрей';

function showMessage5(){
    let user = 'Валерий';
    console.log('Привет ' + user);
}

console.log(user); //Андрей
showMessage5();// Привет Валерий
console.log(user);// Андрей

/*
    Переменные объявленые внутри функции являются самостоятельными и не связаны с внешними
*/

//Параметры функции

let chatName = 'Вика';

function showMessage6(from, text){
    console.log(from + ': ' + text);
}

showMessage6('Аня', 'Привет') // Аня: Привет
showMessage6(chatName, 'Как дела?'); // Вика: Как дела?

showMessage6('Аня'); // Аня: undefind

/*
    Параметры функции видны как локальные переменные. Меняя их мы не меняем внешнюю
    переменную с таким же именем
*/

//Параметры по умолчанию

function showMessage7(from, text = 'текст по умолчанию'){
    //text  = text || 'текст по умолчанию';

    console.log(from + ': ' + text);
}

showMessage7('Виталий'); //Виталий: текст по умолчанию
showMessage7('Виталий', 'Привет'); // Виталий: Привет

