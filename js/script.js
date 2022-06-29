'use strict';

// let arr = [1, 2, 6, 8, 'string'];
// console.log (arr);
// console.log (arr[2]);

// let arr = ['a', 'b', 'c', 'd'];
// console.log (arr[0] + arr[1] + arr[2] + arr[3]); // вывод строки abcd

// let arr = [1, 2, 8];
// console.log (arr[0] + arr[1] + arr[2]);

// let arr = [2, 5, 3, 9]; 
// let result = arr[0]*arr[1] + arr[2]*arr[3];
// console.log (result);

// let arr = [1, 2, 4, null, 'rere'];
// console.log(arr.length);

// let arr = [1, 2, 4, null, 'rere'];
// arr[3] = 6;
// console.log(arr);

// let arr = [1, 2, 3, 4];
// arr[0]++;
// ++arr[1];
// arr[2]--;
// --arr[3];
// console.log(arr); // выведет [2, 3, 2, 3]

// let arr = [1, 2, 3];
// arr[0]+=3;
// arr[1]+=3;
// arr[2]+=3;
// console.log(arr); // выведет [2, 3, 4]

// let arr = [1, 2, 3];
// arr[3] = 6;
// arr[4] = 9;
// console.log(arr); // выведет [1, 2, 3, 6, 9]

// let arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// alert(arr.length)

// let obj = {1: 'пн', 2: 'вт', 3:'ср'};
// console.log(obj[2]) // выведет 'вт'
// console.log(obj);

// let obj = {1: 'a', 9: 'b', 2: 'c'};
// console.log(obj[9], obj[1]); // выведет [Object object]

// let obj = {key1: 'a', key2: 'b', key3: 'c'};
// console.log(obj['key2']); // выведет 'b'

// let obj = {a: '1', b: '2', c: '3'};
// console.log(Number(obj['a']) + Number(obj['b']) + Number(obj['c'])); // сумма = 6

// let obj = {'1key': 'a', 'key-2': 'b', key3: 'c'};
// console.log(obj['1key']);  // выведет 'a'
// console.log(obj['key-2']); // выведет 'b'
// console.log(obj['key3']);  // выведет 'c'

// let obj = {'1a': 1, '2b': 2, 'c-c': 3};
// console.log (Number(obj['1a']) + Number(obj['2b']) + Number(obj['c-c']));
// console.log (obj['1a'] + obj['2b'] + obj['c-c']); //выведет 6

// let obj = {'1a': 1, b2: 2, 'c-c': 3, d4: 4};
// console.log (obj['1a'] + obj['b2'] + obj['c-c'] + obj['d4']);

// let obj = {key1: 'a', key2: 'b', key3: 'c'};
// console.log(obj.key1); // альтернативный способ, если ключ без кавычек

// let user = {name: 'Ihor', surname: 'Popov', patronymic: 'Sergeevich'};
// document.write('<b> Name: </b>' + user.name + '<br>' + '<b>Surname: </b>' + user.surname + '<br>' + '<b> Patronymic: </b>' + user.patronymic + '<br><br>');

// let date = {year: 2022, month: '06', day: 27};
// document.write (date['year'] + '-' + date['month'] + '-' + date['day'])

// let obj = {};
// obj['key1'] = 1;
// obj['key2'] = 2;
// obj['key3'] = 3;
// console.log(obj);

// let arr = [1, 2, 3, 4, 5];
// let key1 = 1;
// let key2 = 2;
// console.log(arr[key1] + arr[key2]);

// let obj = {'a': 1, 'b': 2, 'c': 3};
// let key1 = 'a'
// console.log(obj[key1])

// let obj = {'a': 1, 'b': 2, 'c': 3};
// obj['d'] = 6;
// let key1 = 'd';
// console.log(obj[key1]);

// console.log( typeof {a: 1, b: 2, c: 3} ); // выведет 'object'

// let arr = [1, 2, 3];
// console.log( typeof arr ); // выведет 'object'

// let arr = ['1', 2, 3];
// console.log( typeof arr[0] ); // выведет 'string'

// console.log( Array.isArray([]) ); // выведет true
// console.log( Array.isArray({}) ); // выведет false

// let a = [1, 2, 3];
// let b = a;
// let c = a;
// c[0] = 'google';
// console.log(b);

// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr1[0] = 'a';
// arr2[1] = 'b';
// console.log(arr1); // выведет ['a', 'b', 3]

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// console.log('a' in obj); // true
// console.log('f' in obj); // false

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// delete obj['a']; // удаление элемента 'a'
// console.log (obj);
// console.log ('a' in obj); // проверили

// let arr = ['a', 'b', 'c', 'd', 'e'];
// delete arr[1];
// arr[1] = 'f';
// console.log(arr);

// let arr = [1, 2, 3, 4, 22];
// console.log(arr[arr.length-1]);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4]);

// let arr = [1, 2, 3, 4, 5, 4];
// console.log(arr.length);

// let obj = {a: 1, b: 2, c: 3};
// console.log(obj.b);
// console.log(obj['a']);

// let obj = {a: 1, b: 2, c: 3};
// let key = 'c';
// console.log(obj[key]);

// let obj = {a: 1, b: 2, c: 5};
// let sum = obj['a'] + obj['b'] + obj['c'];
// console.log(sum);

let obj = {a: 1, b: 2, c: 3};
console.log(obj.length);