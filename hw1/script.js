"use strict";
// Cистема уравнений
/*{
  let x;
  if (a > b)
    x = a + b / 2 * 2;
  else if (a === b)
    x = 400;
  else
    x = a - b + 2 / b * 4;
}*/

// Попадание точки в область
//1
{
  const  xCoordinate  =  parseFloat ( prompt ( ' Input x ' , ' ' ));
  const  yCoordinate  =  parseFloat ( prompt ( ' Input y ' , ' ' ));
  if ( (xCoordinate >= - 4 ) && (xCoordinate <= 4)  &&  (yCoordinate >= 0) && (yCoordinate <= 4)  && ( xCoordinate >= yCoordinate - 4 ) && ( xCoordinate <= 4 - yCoordinate))
    alert('Точка попадает в область');
  else
    alert('Точка НЕ попадает в область');
}

//2

{
  const  xCoordinate  =  parseFloat ( prompt ( ' Input x ' , ' ' ));
  const  yCoordinate  =  parseFloat ( prompt ( ' Input y ' , ' ' ));
  if (( xCoordinate >= -1 ) && ( xCoordinate <= 1 ) && ( yCoordinate >= 0 ) && ( yCoordinate <= 1 ) && ( xCoordinate >= -yCoordinate ) && (xCoordinate <= yCoordinate))
    alert('Точка попадает в область');
  else if (( xCoordinate >= -1 ) && ( xCoordinate <= 1 ) && ( yCoordinate < 0 ) && ( yCoordinate >= -1 ) && ( xCoordinate <= -yCoordinate ) && (xCoordinate >= yCoordinate))
    alert('Точка попадает в область');
  else
    alert('Точка НЕ попадает в область');

}
//3
{
  const  xCoordinate  =  parseFloat ( prompt ( ' Input x ' , ' ' ));
  const  yCoordinate  =  parseFloat ( prompt ( ' Input y ' , ' ' ));
  if ((xCoordinate ** 2) <= 1 - (yCoordinate ** 2))
    alert('Точка попадает в область');
  else if (( xCoordinate >= -2) && ( xCoordinate <= 0 ) && ( yCoordinate >= -2 ) && ( yCoordinate <= 0 ) && (xCoordinate >= -2 - yCoordinate))
    alert('Точка попадает в область');
  else
   alert('Точка НЕ попадает в область');
}

// При помощи prompt запросить у пользователя номер дня недели.
// Вывести при помощи alert название дня недели.
// если пользователь ввел некорректное значение вывести сообщение "Такого дня недели не существует!"

{
  const  dayOfWeek  =  parseFloat ( prompt ( ' номер дня недели ' , ' ' ));
/*  let namesOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      nameOfDay = namesOfWeek[dayOfWeek - 1];
  if typeof nameOfDay === "string"
    alert (nameOfDay);
  else
    alert ('Такого дня недели не существует!');*/

  switch (dayOfWeek) {
    case 1:
      alert('Пн');
      break;
    case 2:
      alert('Вт');
      break;
    case 3:
      alert('Ср');
      break;
    case 4:
      alert('Чт');
      break;
    case 5:
      alert('Пт');
      break;
    case 6:
      alert('Сб');
      break;
    case 7:
      alert('Вс');
      break;
    default:
      alert('Такого дня недели не существует!');
      break;
  }
}

// Пользователь вводит два числа. Найти и вывести максимальное из двух чисел.
{
  const firstNumber  =  parseFloat ( prompt ( ' Input first number ' , ' ' ));
  const  secondNumber  =  parseFloat ( prompt ( ' Input second nymber ' , ' ' ));
  if (firstNumber > secondNumber)
    alert(`Число ${firstNumber} больше`);
  else if (firstNumber < secondNumber)
    alert(`Число ${secondNumber} больше`);
  else if (firstNumber === secondNumber)
    alert(`Числа ${secondNumber} равны`);
  else
    alert('Чепухня какая-то');
}
// Найти максимальное из двух чисел. Учтите вариант равенства чисел
// !!!! Вроде тоже самое что и вверху

// В первом подъезде квартиры с 1 по 20.
// Во втором с 21 по 48. В третьем с 49 по 90.
// Пользователь вводит номер квартиры.
// Программа должна указать в каком подъезде находится данная квартира.
// Программа должна учитывать вариант ввода чисел за пределами диапазона 1..90.

{
  const numberOfFlat  =  parseFloat ( prompt ( ' ВВедите номер квартиры' , ' ' ));
  if (( numberOfFlat >= 1 ) && (numberOfFlat <= 20))
    alert('Квартира в первом подъезде');
  else if ((numberOfFlat >= 21) && (numberOfFlat <= 48))
    alert('Квартира во втором подъезде');
  else if ((numberOfFlat >= 49) && (numberOfFlat <= 90))
    alert('Квартира в тртетьем подъезде');
  else
    alert('охоже вы ошиблись адрессом');
}

// Пользователь вводит логин и пароль.
// Если логин и пароль совпадают с указанными ниже, то выводится «Добро пожаловать».
// Если не совпадают – то «Ошибка входа»

{
  let log  =  prompt ( ' Input login' , ' ' ), pass;
  switch (log){
    case 'ivan':
      pass = prompt ( ' Input password ' , ' ' );
      if (pass === '334455')
        alert('Добро пожаловать');
      else
        alert('Ошибка входа. Неверный пароль!');
      break;
    case 'alex':
      pass = prompt ( ' Input password ' , ' ' );
      if (pass === '777')
        alert('Добро пожаловать');
      else
        alert('Ошибка входа. Неверный пароль!');
      break;
    case 'petr':
      pass = prompt ( ' Input password ' , ' ' );
      if (pass === 'b5678')
        alert('Добро пожаловать');
      else
        alert('Ошибка входа. Неверный пароль!');
      break;
    default:
      alert('Пользователь не найден');
      break;
  }
}
