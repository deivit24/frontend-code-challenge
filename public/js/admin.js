const BASE_URL = window.location.origin + '/users';

console.log(BASE_URL);
console.log('hello');
const users = document.getElementById('users');
const usersTable = document.getElementById('usersTable');
const add_user_form = document.getElementById('add_user_form');

const getUsers = async () => {
  const res = await axios.get(`${BASE_URL}`);

  for (let value of res.data) {
    $('#users').append(`<li>${value.firstName} ${value.lastName}<li/>`);
    $('#usersTable').append(`
    <tr>
      <th scope="row">${value.id}</th>
      <td>${value.email}</td>
      <td>${value.firstName} ${value.lastName}</td>
      <td>${value.state} </td>
  </tr>`);
  }

  return res.data;
};

getUsers();
