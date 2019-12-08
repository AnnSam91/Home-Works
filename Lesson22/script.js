'use strict';

/*1. Написать функцию с названием searchArrayWord и ищет слово в массиве. 
    Она принимает 2 параметра - 
   1) Слово которое нужно найти
   2) Массив в котором находятся элементы со словами. Например ['Кот', 'Собака', 'Жираф' ]
Функция должна вернуть true или false*/

let arr = ['Кот', 'Собака', 'Жираф' ];


function searchArrayWord(arr, item){
   for(let i = 0; i < arr.lenght; i ++){
      if( arr[i] === item) return true
   }return false
}

console.log(searchArrayWord(arr, 'Конь') );

/*2. Определить среднее арифмитическое чисел из массива.
   var arr = [1, 2, 3, 7, 6, 9];*/

   
   let arr2 = [1, 2, 3, 7, 6, 9];
   let sum = 0;

   for(let i = 0; i < arr2.length; i++){
      sum = sum + arr2[i];
   }
   let result = sum / arr2.length;

   console.log(result);


/*3. Перевернуть элементы массива задом наперед. Не используя reverse(мы еще не учили его)
   var arr2 = [1, 3, 5, 6, 7, 9];*/

   let arr3 = [1, 3, 5, 6, 7, 9];


for (let i = arr3.length - 1; i >= 0 ; i--) {
    console.log( arr3[i] + ' ');
}

/*4. Дан объект {html:'HTML', css: 'CSS', js: 'ECMA'}
Нужно получить массив ключей этого объекта и отобразить в консоли.*/

let arr4 = {html:'HTML', css: 'CSS', js: 'ECMA'};

console.log(Object.keys(arr4))


/*5. Создайте объект описывающий Заказ на сайте.
Создать можно любым из способов - даже просто написать консрукцию var obj = {...}. 
Главное учесть, что единицы измерения обычно не записываются в объект, а 
записываются просто цифры переведенные к общей единице измерения(например кг переводятся в граммы).

В нем должно храниться:
- Имя покупателя
- Телефон покупателя
- Адрес покупателя
- Общая сумма заказа
- Общий вес заказа
- Купленные товары:
1 товар - Чашка \ 100 грн. \ вес 200 грамм
2 товар - Ложка \ 30 грн. \ вес 100 грамм
3 товар - Чайник \ 550 грн. \ вес 2 кг
4 товар - Кружка \ 150 грн \ вес 400 грамм*/

let total_sum = 0;
let cost= [100, 30, 550, 150];
for(let i = 0; i < cost.length; i++){
    total_sum=total_sum+cost[i];
}

let weight = [200, 100, 2000, 400];
let total_weight = 0;
for(let i = 0; i < weight.length; i++){
    total_weight=total_weight+weight[i];
}

let item1 = { item_name: 'Чашка', cost: 100, weight: 200 };
let item2 = { item_name: 'Ложка', cost: 30, weight: 100 };
let item3 = {item_name: 'Чайник', cost: 550, weight: 2000};
let item4 = {item_name: 'Кружка', cost: 150, weight: 400};
let shopping = {  name: 'name', 
                telephone: 'telephone', 
                address: 'address',
                total_sum: total_sum + ' грн',
                total_weight: total_weight + ' гр',
                purchased_items: [ item1, item2, item3, item4]                
                          
            }

console.log(shopping);