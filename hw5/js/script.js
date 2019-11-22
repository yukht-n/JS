(function () {
    "use strict";
    const coffee1 = {
        name: 'Есспресо',
        sugar: true,
        price: 10,
        id: document.getElementById('coffee1'),
    };
    const coffee2 = {
        name: 'Американо',
        sugar: true,
        price: 10,
        id: document.getElementById('coffee2'),
    };
    const coffee3 = {
        name: 'Латте',
        sugar: true,
        price: 15,
        id: document.getElementById('coffee3'),
    };
    const coffee4 = {
        name: 'Капучино',
        sugar: true,
        price: 20,
        id: document.getElementById('coffee4'),
    };

    const scoreboard = document.getElementById('scoreboard');
    // function getMoney() {
    //     return document.getElementById('cashAcceptor').addEventListener('click',(event) => {
    //         return prompt('Money', '');
    //     })
    // }
    function delay() {
        setTimeout(function (){console.log(1);},2000);
    }
    function money(balance){
        while (balance > 0){
            scoreboard.innerHTML = 'Осталось заплатить ' + balance + 'грн';
            delay();
            // balance = balance - document.getElementById('cashAcceptor').addEventListener('click',(event) => {
            //     return prompt('Money', '');
            // });
            balance = balance - prompt('Money', '');
            // funcGetMoney(); - выдает  информацию о полученных автоматом денег
        }
        if (balance < 0) {
            scoreboard.innerHTML = 'Заберите сдачу ' + (-balance) + 'грн';
            delay();
            // functGetBackMoney(balance);// функция возврата денег
        }
        scoreboard.innerHTML = 'Приятного аппетита';
        delay();
        scoreboard.innerHTML = 'выберите номер напитка';
    }
    let choose = function choosenCoffee(id) {
        console.log(id);
        scoreboard.innerHTML = `${id.name}. Цена - ${id.price} грн`;
        setTimeout(money, 5000, id.price);
    };
    scoreboard.innerHTML = 'выберите номер напитка';
//    const clickBtn = document.getElementById('click');


    coffee1.id.addEventListener('click',(event) => {
        console.log(coffee1.id.id);
        choose(coffee1);
    })
    coffee2.id.addEventListener('click',(event) => {
        console.log(coffee2.id.id);
        choose(coffee2);
    })
    coffee3.id.addEventListener('click',(event) => {
        console.log(coffee3.id.id);
        choose(coffee3);
    })
    coffee4.id.addEventListener('click',(event) => {
        console.log(coffee4.id.id);
        choose(coffee4);
    })

})();