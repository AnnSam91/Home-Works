'use strict';

//Объекты - Копирование по ссылке

let name = 'Иван';
let user = name;

let obj1 = {
    'name' : 'Иван',
    'age' : 25
}

let obj2 = obj1; //в obj2 запишеться не объект, а ссылка на объект

obj2.name = 'Александр';

console.log(obj1.name); //Александр

//Клониерование объектов

let clone = {};

for(let key in obj1){
    clone[key] = obj1[key];
}

clone.name = 'Игорь';

console.log(clone);

//Object.assing - склеивание объектов

let obj3 = {name : 'Петр'};

let premission1 = {canView : true};
let premission2 = {canEdit : false};

Object.assign(obj3, premission1, premission2);

console.log(obj3);

//Длинна массивов (length)

let arr3 = [1,2,3,4,67,8,43] ;

arr3.length = 2;

console.log(arr3);

//Создание массива через new Array()

let arr4 = new Array('Яблоко', 'Груша', 'Апельсин');

let arr5 = new Array(4) // создатся массив на 4 пустые ячейки

//Многомерные массивы (матрица)

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(matrix[1][1]); //5

//Преобразование массива в string

let arr6 = [1,2,3];

console.log(String(arr6)); // '1,2,3'

console.log([] + 1); //'1'
console.log([5] + 1); //'51'
console.log([1, 2] + 1); //'1,21'

/*
    с массивом работают те же функции, что и с объктом
    push \ pop \ shift \ unshift
*/

// Функция массива splice - это функция удаления из массива

let arr7 = ['1', 'hello', 'name'];

arr7.splice(1, 1); //первым парамаетром передаем с какого элемента удалить, а вторым сколько элементов удалить

console.log(arr7);


let deleted = arr7.splice(0, 2, 'Яблоко', 'Груша');

console.log(arr7);

console.log(deleted);

arr7.splice(1, 0, 1, 3, 6);

console.log(arr7);

// Метод slice(start, end) - возвращает овый массив и копирует в него элементы начиная от start до end (не включая end)

let arr8 = ['h', 'e', 'l', 'l', 'o'];

console.log(arr8.slice(1, 3) );

// Метод concat - соединение массивов

let arr9 = [];

console.log(arr9.concat(arr8, arr7, 12) );

//Перебор массивов forEach - позволяет запустить функцию для каждого отдельного элемента массива

/*
    item - это текущий элемент иетрации
    index - порядковий номер итерации
    array - это массив с которым мы работаем (ссылка на массив)
*/

arr7.forEach(function(item, index, array){
    console.log( index + ' ' + item + ' ' + array);
    arr7[index] += '2';
});

console.log(arr7);

// Поиск в массиве 

//indexOf \\ lastIndexOf \ includes

/*
    Работает аналогично с текстами, но вместо символов перебирают значения элемнтов массивов
*/

console.log(arr8.indexOf('l') );//2

//indexOf(item, from) - ищет значение item, начиная с индекса from. Возвращает индекс элемента, либо -1 если не найдено

// lastIndexOf - тоже самое только с конца

// includes(item, from) - ищет item, начиная с from и возвращает true, если найдено

console.log(arr7.includes(1) ); //true







// Дата и время

/*
    Для работы с датой и временем используется встроенный объект Date
*/

let now = new Date();

console.log(now);

let jan01_1970 = new Date(0);

console.log(jan01_1970);

//Отсчет времени идет от 1.01.1970

let jan02_1970 = new Date(24 * 3600 * 1000);

console.log(jan02_1970);

//new Date(ms) - принимает миллисекунды (либо timestamp)
//new Date(datastring) - это формат записи 2017-01-26 \ 2017-01-25Т10:22
//new Date(2011, 10, 5, 12, 40, 555) - год, месяц, день, часы, минуты, секунды, миллисекунды





//Функции получения компонентов даты и времени

console.log(now.getFullYear() ); //Выведет полный год

/*
    getMonth() - вернет месяц от 0 до 11
    getDate() - вернет день месяца от 1 до 31

    getHours(), getMinutes(), getSeconds(), getMilliseconds()

    getDay() - вернет от 0(воскресенье) до 6

    Существует также аналогичные функции с приставкой UTC - они вернут тоже самое, только в нулевом часовом поясе

    Например: getUTCFullYear()

    timestamp - это особый вид хранения в котором сочитаются дата+время и отсчитываются от 1.01.1970

    getTime() - возвращает timestamp, количество ms с 1.01.1970

    getTimezoneOffset() - возвращает разницу в минутах ежду вашим поясом и UTC+0

    Есть также аналогичные функции для установки всех параметров даты и времени с приставкой set

    Например: setFullYear() \ setDate() \ setSeconds()

    Также у этих функция есть аналоги с приставкой UTC
*/

let datetime = new Date();

console.log(datetime);

datetime.setFullYear('2000');

console.log(datetime);