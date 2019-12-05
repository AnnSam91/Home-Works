'use strict';

// Автоисправление даты

let date = new Date(2013, 0, 32);

console.log(date);

date.setDate(date.getDate() + 2);

console.log(date);

date.setDate(1); //Установили первое число месяца

console.log(date);

date.setDate(0); //Так как нулевого дня нет, то дата сместиться на единицу назад

console.log(date);

//Преобразование даты к числу, разность дат

let date2 = new Date();

console.log(+date2); //дата преобразуется в миллисекунды как в функции date2.getTime()

let start = new Date();

for(let i = 0; i < 100000; i++){
    let doSomething = i * i * i;
}

let end = new Date();

console.log(`Цикл выполнялся ${end - start} миллесекунд`);

//Date.now() - возвращает метку времени в миллесекундах


//Разбор строки с датой

let ms = Date.parse('2012-01-26T13:51:50.345-07:00');

console.log(ms);



// Функции массивов - find \ findIndex

// find(item, index, array) - функция которая перебирает элементы массива и возвращает значенние ячейки если произошло совпадение

let users = [
    {id:1, name: 'Васислий'},
    {id:2, name: 'Петр'},
    {id:3, name: 'Маша'},
]

let user = users.find(item => item.id == 1); 

/*
    users.find(
        function(item){
            if(item.id == 1){
                return true
            }
        }
    );
*/

console.log(user.name); //Василий

//findIndex - делает тоже самое, но возращает индекс элемента, а не значение

//Функция filter(item, index, array) - ищет один или несколько элементов, если коллбек функция возвращает true и вернет массив
//найденных объектов

let someUsers = users.filter(item => item.id < 3);

console.log(someUsers);



//Преобразование массива

// Функция map(item, index, array) - вызывает коллбек функцию для каждого элемента массива поочередно и возвращает результат этой функции

let lengths = ['Bilbo', 'Gendalf', 'Nazgul'].map(item => item.length);

console.log(lengths);

//sort(fn)

let arr = [1, 2, 15]

arr.sort();

console.log(arr);

//По умолчанию елементы сортируются как строки

function compare(a, b){
    if(a > b) return 1;
    if(a == b) return 0;
    if(a < b) return -1;
}

arr.sort(compare); 

console.log(arr);//1, 2, 15

function compare2(a, b){
    return a - b;
}

arr.sort( (a,b) => a - b );


//Функция reverse - переворачивает массив задом наперед

let arr2 = [1, 2, 3, 4, 5];

arr2.reverse();

console.log(arr2);

//Функция split \ join

//split(delim) - принимает разделитель, оторый будет служить разделителем между словами

let names = 'Вася, Петя, Маша';

let arr3 = names.split(', ');

console.log(arr3);

//У split также есть второй необязательный аргумент, которым можнно ограничить число элементов в массиве

let arr4 = names.split(', ', 2);

console.log(arr4);

let arr5 = names.split(''); //если указан пустой разделитель split разделит посимвольно

console.log(arr5);


//Функция reduce \ reduceRight

//reduce используется если вам нужно вычеслить единое значение, которое изменяется с ходом всех итераций

let arr6 = [1, 2, 3, 4, 5];

let result = arr6.reduce( (sum, current) => sum + current, 0);

console.log(result); //15

//reduseRight делает тоже самое, только идет с конца массива


//Array.isArray - функция обнаружения массива

console.log(typeof {} ); //object
console.log(typeof [] ); //object

console.log(Array.isArray( [] ) ); //true
console.log(Array.isArray( {} ) ); //false