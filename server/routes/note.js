const express = require('express');
const Note = require('../models/note');
const router = express.Router();

router.get('/', (req,res)=> {
  try {

    const note = Note.getNote();
    res.send(note);

  }
  catch(err){
    res.status(401).send({message: 'error in note'});
  }
})


.post('/delete', async (req, res) => {
  try {
    let note = await Note.deleteNote(req.body);
    res.send(note);
  } catch(err) {
    res.status(401).send({message: err.message});
  }
})

.post('/update', async (req, res) => {
  try {
    let note = await Note.updateUser(req.body);
    res.send(note)
  } catch(err) {
    res.status(401).send({message: err.message});
  }
})

module.exports=router;
