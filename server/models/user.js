const users = [
  {
    UserId: 100,
    EmailId: 'nandinimorla2520@gmail.com',
    firstName: 'Nandini',
    lastName: 'Morla',
    password: '123',
  },
  {
    UserId: 101,
    EmailId: 'morlan1@newpaltz.edu',
    firstName: 'Nandini',
    lastName: 'M',
    password: '1234',
  },
  {
    UserId: 102,
    EmailId: 'ganeshvarma2000@gmail.com',
    firstName: 'Ganesh',
    lastName: 'Varma',
    password: '12345',
  },

];

let getUsers = () => users;
module.exports = { getUsers };
