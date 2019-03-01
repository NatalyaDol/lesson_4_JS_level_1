/* 1. Написать функцию, преобразующую число в объект. 
Передавая на вход число от 0 до 999, надо получить на выходе объект, 
в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, 
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект. */
console.log('Задание №1');
var obj = {};
var numInObj = function(number) {
    var answer = prompt('Введите трехзначное число');
   if (answer < 999) {
        obj['единицы'] = parseInt(answer[2]);
        obj['десятки'] = parseInt(answer[1]);
        obj['сотни'] = parseInt(answer[0]);
        console.log(obj);
   } else {
    console.log('Вы ввели не трехзначное число ' + obj);
   } 
}; 
numInObj();


console.log('Задание №2 с корзиной интернет магазина Объекты');
/*Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить 
их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.*/

/*Корзина с выбранным товаром\количество\цена 
храним в виде объекта */
var basketProducts = [
   {name: 'apple', price: 100, quantity: 2},
   {name: 'orange', price: 300, quantity: 1},
   {name: 'mango', price: 100, quantity: 3}
];

// функция подсчета стоимости корзины  countBasketPrice()
var countBasketPrice = function(param) {
   var moneyProduct = 0;
   for (let n in param) {
   var product = param[n];
   moneyProduct += (product['price'] * product['quantity']);
   } return moneyProduct;
   
}
console.log('Итого сумма корзины ' + countBasketPrice(basketProducts));



