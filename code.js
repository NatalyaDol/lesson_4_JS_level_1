/* 1. Написать функцию, преобразующую число в объект. 
Передавая на вход число от 0 до 999, надо получить на выходе объект, 
в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, 
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект. */
//1 вариант решения
console.log('Задание №1');
var getObj = function () {
   let num = + prompt('Введите число от 0 до 999: ');
   let obj = {};

   if (num < 1 || num > 999) {
      console.log('Введите число от 0 до 999:');
      return obj;
   } else {
      obj.units = num % 10;
      obj.tens = (num - obj.units) % 100 / 10;
      obj.hundr = (num - obj.units - obj.tens * 10) % 1000 / 100;
      return obj;
   }
} 
console.log(getObj());

console.log('Задание №2 с корзиной интернет магазина Объекты');
/*Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить 
их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.*/

/*Корзина с выбранным товаром\количество\цена 
храним в виде объекта */
var basketProducts = [
   {name: 'apple', price: 100, quantity: 1},
   {name: 'orange', price: 300, quantity: 1},
   {name: 'mango', price: 100, quantity: 1}
];

// функция подсчета стоимости корзины  countBasketPrice()
//1  вариант решения 

//var countBasketPrice = function(param) {
//    var moneyProduct = 0;
//    for (let n in param) {
//    var product = param[n];
//    moneyProduct += (product['price'] * product['quantity']);
//    } return moneyProduct;
// }

//2 вариант решения 
var countBasketPrice = function() {
   let sum = 0;

   for (let i = 0; i < basketProducts.length; i++) {
      sum += basketProducts[i].price * basketProducts[i].quantity;
   }
   console.log(sum);
};
countBasketPrice();





