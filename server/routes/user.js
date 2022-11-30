const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/', async(req,res)=> {
  try {
    console.log("hi");
    const users = await User.getAllUsers();
    // res.send(users);
    res.json(users);

  }
  catch(err) {
    res.json({ error: err.message || err.toString() });
  }
}

);



router.get('/getusers/', async(req,res)=> {
  try {

    const users = await User.getAllUsers();
    res.send(users);

  }
  catch(err){
    res.status(401).send({message: 'error'});
  }
}

)

.post('/login', async (req, res) => {
  try {
    let user = await User.login(req.body);
    res.send({...user, password: undefined})
  } catch(err) {
    res.status(401).send({message: err.message});
  }
})

.post('/register', async (req, res) => {
  try {
    let user = await User.register(req.body);
    res.send({...user, password: undefined})
  } catch(err) {
    res.status(401).send({message: err.message});
  }
})

.post('/delete', async (req, res) => {
  try {
    let user = await User.deleteUser(req.body);
    res.send({...user, password: undefined})
  } catch(err) {
    res.status(401).send({message: err.message});
  }
})

.post('/update', async (req, res) => {
  try {
    let user = await User.updateUser(req.body);
    res.send({...user, password: undefined})
  } catch(err) {
    res.status(401).send({message: err.message});
  }
})

module.exports=router;
