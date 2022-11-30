const con = require("./db_connect");

async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS notes (
    userID INT NOT NULL,
    noteID INT NOT NULL AUTO_INCREMENT,
    emailId VARCHAR(255) NOT NULL UNIQUE,
    noteContent VARCHAR(255) NOT NULL,
    CONSTRAINT notePK PRIMARY KEY(noteID)
  ); `
  await con.query(sql);
}
createTable();


async function getAllNotes() {
   const sql = `SELECT * FROM notes;`;
   let notes = await con.query(sql);
   console.log(notes)
}

getAllNotes();
updateNote(1,'hello doremon');


async function getNote(noteId) {
  let sql = `
    SELECT * FROM notes
      WHERE noteId = "${noteId}"
  `;

  return await con.query(sql);
}

async function deleteNote(noteID) {
  let sql = `
    DELETE FROM notes
      WHERE noteID = "${noteID}"
  `;

  return await con.query(sql);
}

deleteNote(1);

async function updateNote(noteID, noteContent) {
  let sql = `
    UPDATE notes SET noteContent = "${noteContent}"
      WHERE noteID = "${noteID}"
  `;



  return await con.query(sql);
}




module.exports = { getAllNotes, updateNote, deleteNote, getNote };
