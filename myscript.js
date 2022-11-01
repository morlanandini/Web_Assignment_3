const register = document.getElementById("registerform");
const login = document.getElementById("loginform");
const note=document.getElementById("noteform");

if(register) register.addEventListener('submit', displayRegister);
if(login) login.addEventListener('submit', displayLogin);
if(note) note.addEventListener('submit',displayNote);

function displayNote(e) {
  e.preventDefault();

  let notetext=document.getElementById("notetext").value;
  let note=new Note(notetext);
  console.log(note);
}

function displayLogin(e) {
  e.preventDefault();

  let email=document.getElementById("email").value;
  let password=document.getElementById("password").value;
  let login=new User(null,null,email,password);
  console.log(login);
}

function displayRegister(e) {
  e.preventDefault();

  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let user = new User(firstname, lastname, email,password);
  console.log(user);
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
