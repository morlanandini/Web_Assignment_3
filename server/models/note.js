const con = require("./db_connect");

async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS notes (
    userID INT NOT NULL,
    noteID INT NOT NULL AUTO_INCREMENT,
    emailId VARCHAR(255) NOT NULL,
    noteContent VARCHAR(255) NOT NULL,
    CONSTRAINT notePK PRIMARY KEY(noteID)
  ); `
  await con.query(sql);
}
createTable();


async function getAllNotes() {
 // console.log('in getallnotes');
   const sql = `SELECT * FROM notes;
   let notes = await con.query(sql);
   return await con.query(sql);`

}

// getAllNotes();
// updateNote(1,'hello doremon');

async function CreateNote(note){
 // console.log(note);

  const sql= `INSERT INTO notes (userID,emailId, noteContent)
    VALUES (${note.userID},"${note.emailId}","${note.noteContent}");
  `
  await con.query(sql);
  return await getNote(note.noteID);
}



async function getNote(note) {
  console.log("in getnotes");
  let sql = `
    SELECT noteContent FROM notes
      WHERE emailId = "${note.emailId}"
  `;
  //console.log(sql);

  return await con.query(sql);
}

async function deleteNote(note) {

  let cNote = await getNote(note.noteID);
   if(!cNote[0]) throw Error("Note not found");

  let sql = `
    DELETE FROM notes
      WHERE noteID = "${note.noteID}"
  `;

  return await con.query(sql);
}

//deleteNote(1);

async function updateNote(note) {
  let cNote = await getNote(note.noteID);
   if(!cNote[0]) throw Error("Note not found");
   
  let sql = `
    UPDATE notes SET noteContent = "${note.noteContent}"
      WHERE noteID = "${note.noteID}"
  `;

  return await con.query(sql);
}




module.exports = { getAllNotes, updateNote, deleteNote, getNote, CreateNote };
