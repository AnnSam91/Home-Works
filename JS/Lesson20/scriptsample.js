'use script';

// Возврат значения функциями (return)

function sum(a, b){
    return a + b;
}

console.log( sum (10, 15) );//25

let resultSumm = sum (8, 6);

console.log(resultSumm); //14

/* 
    Важным моментом при срабатывании return происходит тоже, что и break, но допольнительно еще
    возвращается значение переданное чере return
*/

function chackAge(age){
    if(age > 18){
        return true;
    }else{
        return false;
    }
}

console.log( chackAge(22) ); //true

/*
    return можно использовать и без значения. Тогда он срабоатет как break
    (просто завершит выполнение функции)

    Функция с пустым return вернет undefined
    Функция без return вернет тоже undefined
*/

function doNothing(){}

console.log( doNothing() ); //undefined

function doNothing2(){ return; }

console.log( doNothing2() ); //undefined

//Никогда не добавляйте перенос строки между return и значением

/*
    Именование функций

    1) В имени функции должно содержатся действие и имя того над чем производится действие
        Например:
        showMessage
        getAge
        createAccount
        checkPremission

    2) Функции нужно создавать с условием, что она выполняет какое-то одно действие даже если функции
    будут выполнятся вместе
        Например:
        Функция showMessage выполняет 2 другие функции showName и showText
        Функция Стирать будет содержать функции Залить_воду \ Залить_порошок \Вращать_барабан\ Слить_воду

    Нужно комментировать действия происходящие в функциях, описывая этапы работы, принимаемые значения,
    возвращаемые значения...
*/


//Function Expression (Функциональное выражение)

/*
    Синтаксис функций, который мы записывали ранее называется Function Declaration (Объявление функции)
*/

let sayHi = function(){
    console.log('Привет');
};

sayHi();//Привет

console.log( sayHi ); // выведет тело функции

let copySayHi = sayHi; // В переменную запишеться тело функции

copySayHi(); //Теперь эта функция работает так же как SayHi

//Функция - коллбеки

/*
    Процесс передачи функции как значения
*/

function ask(quastion, yes, no){
    if(confirm(quastion)){
        yes();
    }else{
        no();
    }
}

function showOk(){
    console.log('Вы согласны');
}

function showCancel(){
    console.log('Вы отменили выполнение');
}

ask('Вы согласны?', showOk, showCancel);

//Функции передаваемые в другую функцию  - это как значения представляющие 'действия'


//Различия Function Expression и Function Declaration

/*
    Function Expression - создается когда выполнение доходит до него и в последствии может использоватся
    Function Declaration - может использоватся сразу во всем скрипте

    При сторогом режиме (use strict), когда Function Declaration находиться в блоке {...} эта функция
    доступна только внутри этого блока, но не снаружи
*/

let age2 = 18;

if(age2 > 18){
    function welcome(){
        console.log('Добро пожаловать');
    }
    welcome();
}

//welcome(); - это будет ошибка - эта функция доступна только внутри блока

let copyWelcome;

if(age2 >= 18){
    copyWelcome = function(){
        console.log('Добро пожаловать');
    };
    copyWelcome();
}

copyWelcome();

let age3 = prompt('Сколько Вам лет', 18);

let welcome2 = (age3 < 18) ?
    function(){console.log('Привет')} :
    function(){console.log('Здраствуйте');};

welcome2();

//Функции-стрелки (стрелочные функции)

let summ = (a, b) => a + b;

console.log( summ(10, 90) );//100

//Тело функции сразу возвращает значение (встроенный return);

//Если используется только один аргумент то можно не писать и скобки

let double = n => n*2;

console.log(double(3) ); //6

//Если аргументов нет, то указываются пустые скобки

let sayHello = () => console.log('Hello');

sayHello(); //Hello

//Многострочные стрелочные функции

let summ2 = (a, b) => {
    let result = a + b;
    return result; // в многострочном варианте return нужно указывать
};

console.log( summ2(4, 33) ); //37





//Тип данных Объекты


//объявление объекта (создание)
let user = new Object();

let user2 = {}; //Литеральная нотация или литерал объкта

let user3 = {
    name: 'Иван',
    age: 30,
    height: 180,
};

// Свойства объекта также называют полями объекта

// Получение или обращение к свойствам объекта

console.log( user3. name ); //Иван
console.log( user3 );//Выведет объект

//Добавление свойства в объект

user3.isAdmin = true;

console.log(user3);

//Удаление из объекта

delete user3.age;

console.log(user3);

//Если названия свойства состоит из нескольких слов, то название нужно брать в кавычки

let user4 = {
    'name': 'John',
    'home address': 'Poltava'
};

console.log(user4["home address"] ); //Poltava

/*
    Что бы обратится к свойству с названием из более чем 1 слова, нужно соблюдать такой синтаксис
    ['название_свойства']
    Этот способ также позволяет обратится к свойству передавая вместо имени переменную
*/

let option_name = 'home address';

console.log(user4 [option_name] ); //Poltava

//Вычесляемые свойства

let fruit = prompt('Какой фрукт купить?', 'apple');

let bag = {
    [fruit]: 5 //имя свойства будет взято из переменной fruit
}

console.log( bag.apple);

console.log( bag );

//Проверка на существование свойства

let user5 = {
    age: 19
};

console.log( user5.name === undefined ); //true

console.log('name' in user5); //false
console.log('age' in user5); //true

//Цикл for...in

/*
    Нужен для перебора свойств объекта.

    for( key in object){

    }

    key - это переменная, куда на каждой итерации будет попадать имя текущего свойства
    object - имя объкта
*/

for(let key in user3){
    console.log(key + ': ' + user3[key]);
}



