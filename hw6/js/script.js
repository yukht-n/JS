const table = document.getElementById('table');
const headOfTable = document.querySelector('thead');
const modalWindow = document.getElementById('modalWindow');
const span = document.querySelector('.close');
const modalContent = document.querySelector('.modal-content');
//let arrOfUsers;
let n = 1; // переменная сортировки

//------------- ADD EVENT HANDLERS ----------------
headOfTable.addEventListener('click', onClickHead);
span.addEventListener('click', closeModalWindow);
table.addEventListener('click', onClickTable);
//------------- ADD EVENT HANDLERS ----------------


userFromServer().then(function (res) {
    table.innerHTML = printUsers(res)
});


async function userFromServer(id='') {
    return await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json());
}

function printUsers(data) {
    return data.reduce((html, user) => html + `
            <tr data-id="${user.id}">
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.website}</td>
            </tr>
        `, '');
}

// function definitionOfEvent(event) {
//     console.log(event.target.hasAttribute('data-id'));
//     event.preventDefault();
//     if (event.target.hasAttribute('data-id')) {
//         return sortBy(event.target.closest('td').getAttribute('data-id'));
//     } else {
//  //       return popUp(event.target.closest('tr').getAttribute('data-id'));
//         return userFromServer(event.target.closest('tr').getAttribute('data-id')).then(function (res) {
//             modalWindow.style.display = 'block';
//             modalContent.innerHTML = printFullInfo(res)
//         });
//     }
// }

function onClickTable(event) {
    event.preventDefault();
    return userFromServer(event.target.closest('tr').getAttribute('data-id')).then(function (res) {
        modalWindow.style.display = 'block';
        modalContent.innerHTML = printFullInfo(res)
    });
}

function onClickHead(event) {
    event.preventDefault();
    return sortBy(event.target.closest('td').getAttribute('data-id'));
}

function sortBy(id) {
    userFromServer().then(function (res) {
        res.sort((a, b) => a[id] > b[id] ? (n) : (-n));
        n = -n;
        table.innerHTML = printUsers(res)
    });
    }

// function popUp(userId) {
//     userFromServer(userId).then(function (res) {
//         modalWindow.style.display = 'block';
//         modalContent.innerHTML = printFullInfo(res)
//     });
// }

function printFullInfo(user) { // надобы переписть лучше рекурсию
    let html = '';
    for (let [key, value] of Object.entries(user)) {
        if (typeof value === 'object')
            html += `${key} <br>  ${printFullInfo(value)}`;
        else
            html += `${key}: ${value} <br>`;
    }
    return html;
}

function closeModalWindow(event) {
    event.preventDefault();
    modalWindow.style.display = 'none';
}