"use strict";

// Если ночью будет время, надо пропробовать запилить все-таки с масиивом и циклом
// Пользователь вводит год рождения.
// Программа показывает количество лет и если лет больше или равно 16,
// то пишет – «добро пожаловать», если нет – «вход воспрещен».
{
  const year  =  parseFloat ( prompt ( ' ВВедите год рождения, в четырехзначном формате' , ' ' ));
  let date = new Date();
  let age = date.getFullYear() - year;
  alert(`Ваш возраст - ${age} лет`);
  if (age < 16)
    alert('вход воспрещен');
  else
    alert('добро пожаловать');
}

// Создайте программу, которая выводит надбавку за стаж.
// Пользователь вводит стаж работы, а программа пишет ему надбавку.

{
  const seniority  =  parseFloat ( prompt ( ' ВВедите количество полных лет вашего рабочего стажа' , '0' ));
  let allowance = 0;
  if (seniority < 3){
    //
  }
  else if (seniority < 10)
    allowance = 10;
  else if (seniority < 20)
    allowance = 20;
  else
    allowance = 25;
  alert(`Ваша надбавка за стаж работы состовляет  ${allowance}%`);
}

// Написать программу которая будет склонять слово “товар”
// в зависимости от количества товаров в корзине.
// Например 1 - товар, 4 - товара, 6 - товаров.

{
  let quantityOfGoods = 0,
    goods = 'нет товаров';
  // кол-во товаров както меняеться
  if (quantityOfGoods != 0)
    switch (quantityOfGoods % 10){
      case 1:
        if ((quantityOfGoods >= 11) && (quantityOfGoods <= 14)){
          goods = quantityOfGoods + ' товаров';
          break;
        }
        goods = quantityOfGoods + ' товар';
        break;
      case 2:
      case 3:
      case 4:
        if ((quantityOfGoods >= 11) && (quantityOfGoods <= 14)){
          goods = quantityOfGoods + ' товаров';
          break;
        }
        goods = quantityOfGoods + ' товара';
        break;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 0:
        goods = quantityOfGoods + ' товаров';
        break;
  }
  alert('В вашей козине '+ goods);
}

// Написать программу эмулирующую работу кофейного автомата

{

  const itemOfDrink = parseFloat(prompt('выберите номер напитка', ''));
  const coffeCard = funct(itemOfDrink); // получаем карту напитка в виде массива данных [название, цена, сахар(true/false), молоко(true/false)]
  alert('Вы выбрали ' + coffeCard[0] + '. ЦЕНА ' + coffeCard + ' грн');
  let sugar = 0, milk = false;
  if (coffeCard[2] === true)
    sugar = parseFloat(prompt('выберите количество сахара', ''));
  if (coffeCard[3] === true)
    milk = parseFloat(prompt('Добавить молоко?', ''));
  let balance = coffeCard[1];
  while (balance > 0){
    alert('Осталось заплатить ' + balance + 'грн')
    balance = balance - funcGetMoney(); // funcGetMoney(); - выдает  информацию о полученных автоматом денег
  }
  functMakeCoffee(itemOfDrink, sugar, milk);
  if (balance < 0) {
    alert('Заберите сдачу ' + (-balance) + 'грн');
    functGetBackMoney(balance);// функция возврата денег
  }
  alert('Приятного аппетита');
}
