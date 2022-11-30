// const con = require("./db_connect");

// async function createTable() {
//   let sql=`CREATE TABLE IF NOT EXISTS notes (
//     userID INT NOT NULL AUTO_INCREMENT,
//     noteID INT NOT NULL AUTO_INCREMENT,
//     emailId VARCHAR(255) NOT NULL UNIQUE,
//     noteContent VARCHAR(255) NOT NULL,
//     CONSTRAINT userPK PRIMARY KEY(noteID)
//   ); `
//   await con.query(sql);
// }
// createTable();


// async function getAllNotes() {
//    const sql = `SELECT * FROM notes;`;
//    let notes = await con.query(sql);
//    console.log(notes)
// }

// // getAllNotes();

// async function getNote(noteId) {
//   let sql = `
//     SELECT * FROM notes 
//       WHERE noteId = "${noteId}"
//   `;

//   return await con.query(sql);  
// }

// async function deleteNote(noteID) {
//   let sql = `
//     DELETE FROM notes 
//       WHERE noteID = "${noteID}"
//   `;

//   return await con.query(sql);  
// }

// // updateNote(1001,'Jimmy')
// // deleteUser(1001)

// async function updateNote(noteID, noteContent) {
//   let sql = `
//     UPDATE users SET noteContent = "${noteContent}" 
//       WHERE noteID = "${noteID}"
//   `;

  

//   return await con.query(sql);  
// }




// module.exports = { getAllNotes, updateNote, deleteNote, getNote };
























const note = [
  {
    UserId: '100',
    emailId: 'nandinimorla2520@gmail.com',
    noteId: 10000,
    noteContent: 'hello',
  },
  {
    UserId: '101',
    emailId: 'morlan1@newpaltz.edu',
    noteId: 10001,
    noteContent: 'hii',
  },
  {
    UserId: '102',
    emailId: 'ganeshvarma2000@gmail.com',
    noteId: 10002,
    noteContent: 'hello hi',
  },

];

let getNote = () => note;
module.exports = { getNote };
