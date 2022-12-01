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
  // console.log(user);

  let cUser = await getUser(user.userID);
  if(cUser.length > 0) throw Error("User already in use");

  const sql= `INSERT INTO users (userID, firstName,lastName,emailId, password)
    VALUES (${user.userID}, "${user.firstName}","${user.lastName}","${user.emailId}","${user.password}");
  `
  await con.query(sql);
  return await login(user);


}

async function getAllUsers() {
   const sql = `SELECT * FROM users;`;
   let users = await con.query(sql);
   return await con.query(sql);
}

//getAllUsers();

async function getUser(userID) {
  // console.log(userID);

  let sql = `
    SELECT * FROM users WHERE userID = ${userID}`;
    // console.log(sql);
  return await con.query(sql);
}



async function deleteUser(user) {
console.log(user.userID);
  let cUser = await getUser(user.userID);
   if(!cUser[0]) throw Error("User not found");
   let sql = `
    DELETE FROM users
      WHERE userID = ${user.userID}`;
      return await con.query(sql);
}

//updateUser(1001,'Jim')
// deleteUser(1001)

async function updateUser(user) {
  let cUser = await getUser(user.userID);
   if(!cUser[0]) throw Error("User not found");

  let sql = `
    UPDATE users SET firstName = "${user.firstName}"
      WHERE userID = "${user.userID}"
  `;

  return await con.query(sql);
}


async function login(user) {
  console.log(user.firstName); // {userName: "sda", password: "gsdhjsga"}
  let cUser = await getUser(user.userID); //[{userName: "cathy123", password: "icecream"}]

  if(!cUser[0]) throw Error("User not found");
  if(cUser[0].password !== user.password) throw Error("Password incorrect");

  return cUser[0];
}




module.exports = { getAllUsers, login, register, updateUser, deleteUser, getUser };
