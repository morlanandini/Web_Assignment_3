const express = require('express');
const Note = require('../models/note');
const router = express.Router();

router.get('/', async(req,res)=> {
  try {

    const note =await Note.getAllNotes();
    res.json(note);

  }
  catch(err){
    res.status(401).send({message: 'error in note'});
  }
})

router.post('/create', async (req, res) => {
  try {
    let note = await Note.CreateNote(req.body);
    res.send(note);
  } catch(err) {
    res.status(401).send({message: err.message});
  }
})


router.delete('/delete', async (req, res) => {
  try {
    let note = await Note.deleteNote(req.body);
    res.send(note);
  } catch(err) {
    res.status(401).send({message: err.message});
  }
})

router.put('/update', async (req, res) => {
  try {
    let note = await Note.updateNote(req.body);
    res.send(note)
  } catch(err) {
    res.status(401).send({message: err.message});
  }
})

module.exports=router;
