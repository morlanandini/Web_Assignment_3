import { fetchData, setCurrentUser, getCurrentUser } from './main.js'

// -------------------------Registration----------------------------
const register = document.getElementById("registerform");
if(register) register.addEventListener('submit', displayRegister);

function displayRegister(e) {
  e.preventDefault();

  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  let emailId = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let user = new User(firstName, lastName, emailId,password);
  // console.log(user);
  fetchData("users/register", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    console.log(data);
    window.location.href = "note.html";
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}
// -------------------------Login page-----------------------------------------------------------------------

const login = document.getElementById("loginform");
if(login) login.addEventListener('submit', displayLogin);

function displayLogin(e) {
  e.preventDefault();
  // console.log('hiiiiii');
  let emailId=document.getElementById("email").value;
  let password=document.getElementById("password").value;
  let login=new User(null,null,emailId,password);
  console.log(emailId);

  fetchData("users/login", login, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "note.html";

  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
  console.log("in displaylogin");
  getNote();

}
// -------------------------NOTE PAGE-----------------------------------------------------------------------------

const note=document.getElementById("noteform");
if(note) note.addEventListener('submit',displayNote);
function displayNote(e) {
  e.preventDefault();
  let noteobj=getCurrentUser();
  let userID=noteobj.userID;
  let emailId=noteobj.emailId;
  let noteContent=document.getElementById("notetext").value;
  let note=new Note(userID,emailId,noteContent);
  console.log(note);
  fetchData("note/create", note, "POST")
  
  .then((data) => {
    window.location.href = "note.html";


  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}
// ------------------------------GET NOTES-----------------------------------------------------------------------------

const noteBtn=document.getElementById('note-button');
if(noteBtn) noteBtn.addEventListener('click',getNote);


function getNote() {
  let noteobj=getCurrentUser();
  let note=noteobj.emailId;
  fetchData("note/getnotes", noteobj, "POST")
  // .then((res) => res.json())
  .then((res) => {
    let p = document.querySelector('.getnotes');
    p.innerHTML = JSON.stringify(res);
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}



class User {
  constructor(firstName,lastName,emailId,password) {
    this.firstName=firstName;
    this.lastName=lastName;
    this.emailId=emailId;
    this.password=password;
  }

  getFirstName()
  {
    return this.firstName;
  }

  getLastName()
  {
    return this.lastName;
  }

  getEmail()
  {
    return this.emailId;
  }

  getPassword()
  {
    return this.password;
  }

  setPassword()
  {
    this.password=password;
  }

  setEmail()
  {
    this.emailId=emailId;
  }

  setFirstName()
  {
    this.firstName=firstName;
  }

  setLastName()
  {
    this.lastName=lastName;
  }
}


function getUsers() {
  fetchData("notes/login", login, "POST")
  .then((res) => res.json())
  .then((data)=> {
    let ul=document.getElementById("calculation");
    data.forEach((user) => {
    // let newNode=document.createElement('li');
    // let text=document.createTextNode(user.EmailId);
    // let text1=document.createTextNode(user.firstName);
    // let text2=document.createTextNode(user.lastName);
    // let text3=document.createTextNode(user.password);
    // newNode.appendChild(text);
    // newNode.appendChild(text1);
    // newNode.appendChild(text2);
    // newNode.appendChild(text3);
    // ul.appendChild(newNode);
    // console.log(user);


    let newNode=document.createElement('tr');

    let childNode0=document.createElement('td');
    let childNode1=document.createElement('td');
    let childNode2=document.createElement('td');
    let childNode3=document.createElement('td');
    let childNode4=document.createElement('td');

    let text0=document.createTextNode(user.UserId);
    let text=document.createTextNode(user.EmailId);
    let text1=document.createTextNode(user.firstName);
    let text2=document.createTextNode(user.lastName);
    let text3=document.createTextNode(user.password);

    childNode0.appendChild(text0);
    childNode1.appendChild(text);
    childNode2.appendChild(text1);
    childNode3.appendChild(text2);
    childNode4.appendChild(text3);

    newNode.appendChild(childNode0);
    newNode.appendChild(childNode1);
    newNode.appendChild(childNode2);
    newNode.appendChild(childNode3);
    newNode.appendChild(childNode4);

    ul.appendChild(newNode);

  }
)
})

      .catch((err)=>console.log(`Error! ${err}`));

}


class Note {
  constructor(userID,emailId,noteContent)
  {
    this.noteContent=noteContent;
    this.userID=userID;
    this.emailId=emailId;
    
  }
  setNote()
  {
    this.noteContent=noteContent;
  }
  setEmail()
  {
    this.EmailId=EmailId;
  }
  setUserId()
  {
    this.userID=userID;
  }

  getNote()
  {
    return this.noteContent;
  }
  getUserID()
  {
    return this.userID;
  }
  getEmailId()
  {
    return this.emailId;
  }
}