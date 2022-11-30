const con = require("./db_connect");

async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS users (
    userID INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255),
    emailId VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    CONSTRAINT userPK PRIMARY KEY(userID)
  ); `
  await con.query(sql);
}
createTable();

async function register(user) {
  let cUser = await getUser(user.userName);
  if(cUser.length > 0) throw Error("Username already in use");

  const sql = `INSERT INTO users (userName, password)
    VALUES ("${user.userName}", "${user.password}");
  `
  await con.query(sql);
  return await login(user);
}

async function getAllUsers() {
   const sql = `SELECT * FROM users;`;
   let users = await con.query(sql);
   console.log(users)
}

//getAllUsers();

async function getUser(userName) {
  let sql = `
    SELECT * FROM users
      WHERE userName = "${userName}"
  `;

  return await con.query(sql);
}

async function deleteUser(userID) {
  let sql = `
    DELETE FROM users
      WHERE userID = "${userID}"
  `;

  return await con.query(sql);
}

//updateUser(1001,'Jim')
// deleteUser(1001)

async function updateUser(userID, firstName) {
  let sql = `
    UPDATE users SET firstName = "${firstName}"
      WHERE userID = "${userID}"
  `;



  return await con.query(sql);
}


async function login(user) { // {userName: "sda", password: "gsdhjsga"}
  let cUser = await getUser(user.userName); //[{userName: "cathy123", password: "icecream"}]

  if(!cUser[0]) throw Error("Username not found");
  if(cUser[0].password !== user.password) throw Error("Password incorrect");

  return cUser[0];
}

module.exports = { getAllUsers, login, register, updateUser, deleteUser, getUser };
