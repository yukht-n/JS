const table = document.getElementById('table');
const headOfTable = document.querySelector('thead');
const modalWindow = document.getElementById('modalWindow');
const span = document.querySelector('.close');
const modalContent = document.querySelector('.modal-content');
let arrOfUsers;
let n = 1; // переменная сортировки

//------------- ADD EVENT HANDLERS ----------------
headOfTable.addEventListener('click', sortBy);
span.addEventListener('click', closeModalWindow);
table.addEventListener('click', popUp);
//------------- ADD EVENT HANDLERS ----------------



fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        arrOfUsers = data;
        table.innerHTML = printUsers(arrOfUsers)
    });


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


function sortBy(event) {
    event.preventDefault();
    const id = event.target.closest('td').getAttribute('data-id');
    console.log(id);
    arrOfUsers.sort((a, b) => a[id] > b[id] ? (n) : (-n));
    n = -n; //
    console.log(arrOfUsers);
    table.innerHTML = printUsers(arrOfUsers);
}
function popUp(event) {
    event.preventDefault();
    const userId = event.target.closest('tr').getAttribute('data-id');
    console.log(userId);
    modalWindow.style.display = 'block';
    modalContent.innerHTML = printFullInfo (arrOfUsers.find(item => item.id == userId));
}
function printFullInfo(user) {
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