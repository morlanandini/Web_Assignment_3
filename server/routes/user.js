const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/', async(req,res)=> {
  try {
    // console.log("hi");
    const users = await User.getAllUsers();
    res.send(users);
  }
  catch(err) {
    res.json({ error: err.message || err.toString() });
  }
})

router.post('/register', async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.params);
    let user = await User.register(req.body);
    res.send({...user, password: undefined})
  } catch(err) {
    res.status(401).send({message: err.message});
  }
})

router.post('/login', async (req, res) => {
  try {
    let user = await User.login(req.body);
    res.send({...user, password: undefined})
  } catch(err) {
    console.log('hiiiiiii');

    res.status(401).send({message: err.message});
  }
})


router.delete('/delete', async (req, res) => {
  try {
    let user = await User.deleteUser(req.body);
    res.send({...user, password: undefined})
  } catch(err) {
    res.status(401).send({message: err.message});
  }
})

router.put('/update', async (req, res) => {
  try {
    let user = await User.updateUser(req.body);
    res.send({...user, password: undefined})
  } catch(err) {
    res.status(401).send({message: err.message});
  }
})

module.exports=router;
