'use strict';

// Тип данных Symbol (Символ)

/*
    Симовл представляет собой уникальный идентификатор
*/

let id = Symbol();
let id2 = Symbol('id');
let id3 = Symbol('id');

console.log( id2 == id3 ); //false

//Также символ никогда не преобразуется в строки

console.log( id2 );

console.log( id2.toString() ); //Symbol(id)

//Создание скрытых свойств объекта

let id4 = Symbol('id');

let user = {
    name: 'Вася'
};

user[id4] = 1;

user[id3] = 2;


console.log(user);

//Свойства объекта объявленое через символ игнорируется циклом for...in

for(let name in user){
    console.log( name + ': ' + user[name]);
}

//Глобальные символы

let id5 = Symbol.for('newid');

//если символ с таким именем (идентификатором) отсутсвует, то он создастся

let id6 = Symbol.for('newid');

// В глобальной области уже есть такой символ, поэтому он запишет его адресс в переменную

console.log( id5 == id6 ); //true

//Функция поиска символов по значению (keyFor)

let sym = Symbol.for('name');
let sym2 = Symbol.for('age');

console.log( Symbol.keyFor(sym) ); // name
console.log( Symbol.keyFor(sym2) ); // age

// Метод объекта, 'this'

let car = {
    name: 'Mazda',
    maxSpeed: 200,
    'current distance': 0,
    drive: function(){
        this ['current distance']+=100;
        console.log( this['current distance'] + ' изменился ' );
    }
}

car.drive();
car.drive();
car.drive();

car.stop = function(){
    console.log('Машина остановилась');
};

car.stop();

//У стрелочных функций нет 'this', поэтому она не будет рабоать в объекте

//Преобразования объекта к примитивам

//При выводе в alert или console.log обїект преобразуется в строке

console.log( car );

console.log( Number(car) ); // NaN


// Конструкторы (Создание объектов через 'new')

/*
    1) Имя функции-конструктора должно начинатся с большой буквы
    2) Функция-конструктор должна вызыватся при помощи оператора 'new'
*/

function User(username){
    this.name = username;
    this.isAdmin = false;
}

let user_1 = new User('Андрей');

console.log(user_1); 

console.log(user_1.name); // Андрей

console.log(user_1.isAdmin); // false



// Методы примитивов

// Это функции, которые описаны в объектах примитивов и позволяют делать различные манипуляции с этими объектами

let str = 'Привет';

console.log( str.toUpperCase() ); //ПРИВЕТ

/*
    function String(...){
        ...
        toUpperCase: function(...){...}
        ...
    }
*/

// Числа

let billion = 1e9; //1 миллиард (1 и 9 нулей)

let ms = 1e-6; //0.000001

// Шестнадцатитиричная система
console.log( 0xff ); //255

//Бинарная форма записи

let a = 0b11111111; //255

//Восьмеричная форма

let b = 0o377; //255

console.log(a == b ); //true

//Метод toString(base) - возвращает строковое представлние числа в системе base

let num = 255;

console.log(num.toString(16) ); //ff

//Максимальная система счисления 36

//Округление чисел

let num2 = 3.1;

console.log( Math.floor(num2) ); // 3 - это округление в меньшую сторону

console.log( Math.ceil(num2) ); // 4 - это округление в большую сторону

console.log( Math.round(num2) ); // 4 - это округление до ближайщашого целого

console.log( Math.trunc(num2) ); // 3 - удаляет дробную часть (не поддерживается InternetExploler)

//Округление до х знаков

let num3 = 1.23456;

console.log( Math.floor( num3 * 100) / 100 ); //1.23456 -> 123.456 -> 123 -> 1.23

//Метод toFixed(n) - округляет число до n знаков

let num4 = 12.34;

console.log( num4.toFixed(1) ); //12.3

let num5 = 12.36

console.log( num4.toFixed(1) ); //12.4

/*
    После применения toFixed возвращается текст, а не число
    При обрезании используется дополнительно метод round
    Если у числа после запятой меньше знаков чем указано toFixed(n), то в результате будут добавлены нули в конце числа
*/

let num6 = 12.34;
console.log( num6.toFixed(6) ); //'12.3400000'

//Неточные вычесления

// Если число слишком большое то оно выведется как бесконечность

console.log(1e500); //infinity

console.log( 0.1 + 0.2 == 0.3 ); //false

console.log( 0.1 + 0.2 ); //0.30000000000000004

console.log( 0.1.toFixed(20) ); //0.10000000000000000555

// 1 способ

let sum2 = 0.1 + 0.2;

console.log( +sum2.toFixed(2) ); // 0.3

//2 способ

console.log( ( 0.1 * 10 + 0.2 * 10 ) / 10 ); //0.3

// Лучше использовать 1 способ так как 2 не идеальный

console.log( (0.28 * 100 + 0.14 * 100) / 100 ); 0.4200000000001

console.log(9999999999999999) //100000000000000000