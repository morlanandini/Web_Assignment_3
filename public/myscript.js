const register = document.getElementById("registerform");
const login = document.getElementById("loginform");
const note=document.getElementById("noteform");
const userBtn=document.getElementById('user-button');
const noteBtn=document.getElementById('note-button');

if(register) register.addEventListener('submit', displayRegister);
if(login) login.addEventListener('submit', displayLogin);
if(note) note.addEventListener('submit',displayNote);
if(userBtn) userBtn.addEventListener('click',getUsers);
if(noteBtn) noteBtn.addEventListener('click',getNote);

function displayRegister(e) {
  e.preventDefault();

  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let user = new User(firstname, lastname, email,password);
  console.log(user);
}

function displayLogin(e) {
  e.preventDefault();

  let email=document.getElementById("email").value;
  let password=document.getElementById("password").value;
  let login=new User(email,password);
  console.log(login);
}

function displayNote(e) {
  e.preventDefault();

  let notetext=document.getElementById("notetext").value;
  let note=new Note(notetext);
  console.log(note);
}

class User {
  constructor(firstname,lastname,email,password) {
    this.firstname=firstname;
    this.lastname=lastname;
    this.email=email;
    this.password=password;
  }

  getFirstName()
  {
    return this.firstname;
  }

  getLastName()
  {
    return this.lastname;
  }

  getEmail()
  {
    return this.email;
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
    this.email=email;
  }

  setFirstName()
  {
    this.firstname=firstname;
  }

  setLastName()
  {
    this.lastname=lastname;
  }
}

class Note {
  constructor(notetext)
  {
    this.notetext=notetext;
  }
  setNote()
  {
    this.notetext=notetext;
  }
  getNote()
  {
    return this.notetext;
  }
}


function getUsers() {
  fetch("http://localhost:3000/users")
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
function getNote() {
  fetch("http://localhost:3000/note")
  .then((res) => res.json())
  .then((data)=> {
    let ul=document.getElementById("calculation");
    data.forEach((user) => {
    // let newNode=document.createElement('li');
    // let text=document.createTextNode(user.emailId);
    // let text1=document.createTextNode(user.noteId);
    // let text2=document.createTextNode(user.noteContent);
    //
    // newNode.appendChild(text);
    // newNode.appendChild(text1);
    // newNode.appendChild(text2);
    // ul.appendChild(newNode);
    // console.log(user);
    // // document.write(li);


    let newNode=document.createElement('tr');
    let childNode1=document.createElement('td');
    let childNode2=document.createElement('td');
    let childNode3=document.createElement('td');
    let childNode4=document.createElement('td');

    let text=document.createTextNode(user.UserId);
    let text1=document.createTextNode(user.emailId);
    let text2=document.createTextNode(user.noteId);
    let text3=document.createTextNode(user.noteContent);
    childNode1.appendChild(text);
    childNode2.appendChild(text1);
    childNode3.appendChild(text2);
    childNode4.appendChild(text3);

    newNode.appendChild(childNode1);
    newNode.appendChild(childNode2);
    newNode.appendChild(childNode3);
    newNode.appendChild(childNode4);
    ul.appendChild(newNode);

  }
)
})

  // .then((data)=> console.log(data))
  .catch((err)=>console.log(`Error! ${err}`));
}
