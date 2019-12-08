'use strict';

//Проверка на бессконечность isFinite \ Проверка на число isNaN

console.log(isNaN(NaN) ); //true

// В начале она преобразует к числу переданные данные и потом определяет число ли 

let text = 'Hello';

console.log(isNaN(text) ); //true

//NaN не равен ни чему другому и даже себе

console.log( NaN === NaN); //false


console.log( isFinite('15') ); //true

// Она сначала преобразовывает число переданные данные и потом озвращает true если это обычное число

//Иногда isFinite используют для проверки - нет ли числа в строке



// parseInt и parseFloat

// parseInt - отделяет число от текста в строке (строка должна начинатся с числа)

console.log( parseInt('100px') ); //100

//parseFloat - работает так же, но сохраняет дробную часть числа

console.log(parseFloat('12.5em') ) //12.5

console.log(parseInt('12.3') ); //12
console.log(parseFloat('12.3.4') ); //12.3

//Если переданный текст начинается с буквы, то функция вернет NaN

console.log(parseInt('a123') ); //NaN

// У parseInt есть еще 2-й параметр, в который можно передать систему исчесления в которой записаны передаваемые данные

console.log(parseInt('ff', 16) );//255



//Math.random() - генерирует псевдослучайное число в диапазоне от 0 до 1 (но не включая 1)

console.log(Math.random()); //
console.log(Math.random()); //

function getRandom( min, max){
    return Math.round( Math.random() * (max - min) + min);
}

console.log(getRandom(1, 10) );

// Math.max (a, b, c, .....) \ Math min (a, b, c, .....)

console.log( Math.max(1,2,3,4,5,6,0) ); //6

console.log( Math.min(1,2,3,4,5,6,0) ); //0

//Math.pow(n, power) - возвращает число n, возведенное в степень power

console.log(Math.pow(2, 10) ); //1024

//Строки 

let bigtext = `Привет
Как дела?
Хорошо`;

//Спецсимволы

let str = 'Hello\nW\'o\\rld';

console.log(str)

/*
    \n - перенос строки
    Что бы вставить в текст спецсимвол нужно перед ним поставить \

    \uXXXX - для вставки в юникод символов
*/

console.log('\u00A9');

console.log('\u{1F60D}');





//Свойство - Длина строки (length)

console.log('aassasassaas'.length); //12

let str2 = 'Hello';

console.log(str2[0] );//H

console.log(str2.charAt(0) ); //H

console.log(str2[str2.length-1] );//o

//Если символ под номеромх[X] отсутсвуют то вернется undefind. а в случае charAt вернется пустая строка

console.log(str2[500]); //undefind

console.log(str2.charAt(5000)); // ''

//Строку можно перебрать посимвольно с помощью for...of

for(let char of 'Hello'){
    console.log(char);
}

//Строки неизменяемые - нельзя поменять значение символа обративщись к нему

/*  Изменение регистра
    toUpperCase - переводит в верхнний регистр
    toLowerCase - переводит в нижний регистр
*/


// Поиск подстроки

// str.indexOff  -ищет подстроку substr в строке str, начиная с позиции pos. Возвращает позицию, либо -1 если ничего не найдено

let str3 = 'Widget with id';

console.log(str3.indexOf('Widget') ); //0

console.log(str3.indexOf('widget') ); //-1

console.log(str3.indexOf('id') ); //1

//У функции есть второй не обязательный аргумент, он позволяет указать с какого символа начнется поиск

console.log(str3.indexOf('id', 2) ); //12

//Есть такая же аналогичная функция, только ищет с конца lastIndexOff(substr, position)

//Функция inCludes - возвращает true, если в строке есть строка подстрока, либо false если нет

console.log(str3.includes('Widget') ); //true

//Также есть второй необязательный параметр - задает от какого нужно искать

//startsWith() \ endsWith

//Определяют начинается или заканчивается строка определенными символами 

console.log(str3.startsWith('Wid') ); //true

console.log(str3.endsWith('id') ); //true



//Получение подстроки (substring \ substr \ slice)

//slice(start, end) - возвращает часть строки от start до end (но не включая end)

let str4 = 'stringify';

console.log(str4.slice(0, 5) ); //'strin'

//Если end не указан, то вернет строку от stert и до конца

console.log(str4.slice(5) ); //'gify'

//Также же можно передать орицательные значения end и start.

console.log(str4.slice(-4, -1) ); //'gif'

//substring(start, end) - возвращает часть строки между start и end
//Это почти тоже, что и slice, только можно задать start больше чем end

console.log(str4.substring(2, 6) ); //'ring'
console.log(str4.substring(6, 2) ); //'ring'

//Отрицательные значения не поддерживаются, они преобразовуются в ноль

//substr(start, length) - возвращает часть строки от start длинной в length

console.log(str4.substr(2, 4) ); //'ring'

//Значение start может быть отрицательным, тогда начало будет с конца

//codePointAt(pos) 

console.log( 'z'.codePointAt() ); //122
console.log( 'Z'.codePointAt() ); //90

//fromCodePoint(code)

console.log( String.fromCodePoint(90) );//'Z'






// Массивы

let arr = new Array();
let arr2 = [];

let fruits = ['Яблоко', 'Апельсин', 'Слива'];

console.log( fruits [1] );

fruits[2] = 'Банан';

console.log(fruits);

console.log(fruits.length); //Длинна массива или количество элементовв массиве

fruits[90] = 'Груша'; //Так лучшн не делать( образуется дырка в 87 ячеек)


console.log(fruits.length);//91


console.log(fruits);

fruits[fruits.length] = 'Киви';

console.log(fruits);

//В массив можно складывать любые типы данных

let arr3 = ['Яблоко', 
    {name : 'Иван'}, 
    true, 
    function(){return true;},
];

console.log(arr3[1].name); //Иван



//Методы pop, push, shift, unshift

//push - добавляет элементы в конец массива

arr3.push('Привет');

//pop - удаляет последний элемент из массива и возвращает его

let deleted_item = arr3.pop();

//shift - удаляет первый элемент из массива и возвращает его

let deleted_item2 = arr3.shift();

//unshift - добавляет элемент в начало массива

arr3.unshift(true);

console.log(arr3);

//Методы push и unshift могут добавить сразу несколько объктов если их перечислить через запятую

arr3.push('Гранат', 'Лайм');

/*
    [1, 2, 3, 4]

    [0, 1 ,2, 3, 4]

*/

// Перебор элементов массивов

for(let i = 0; i < arr3.length; i++ ){
    console.log( arr3[i] );
}

for(let fruit of arr3){
    console.log(fruit)
}  