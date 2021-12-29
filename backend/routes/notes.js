const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');


// ROUTE 1: Get all the notes using: GET "/api/notes/fetchallnotes". No login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {

    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Adding new Note using: POST "/api/notes/addnote". No login required
router.post('/addnote', fetchuser, [
    // These validators are taken from express validator website

    // title must be at least 3 chars long
    body('title', 'Enter a valid title').isLength({ min: 3 }),

    // description must be at least 5 chars long
    body('description', 'Password should be minimum 5 char').isLength({ min: 5 }),], async (req, res) => {

        try {



            const { title, description, tag } = req.body;
            // Here is what to do if the error occurs 
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            //Saving the note
            const note = new Note({
                title, description, tag, user: req.user.id
            })

            const savednote = await note.save();

            res.json(savednote)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }

    })


    // ROUTE 3: Updating an existing note using: GET "/api/notes/updatenote". No login required

    router.put('/updatenote/:id', fetchuser, async (req, res) => {

        //destructuring method to remove title, description, tag
        const{title, description, tag} = req.body;

        //Create a newNote object
        const newNote = {};
        if(title){newNote.title = title};
        if(description){newNote.description = description};
        if(tag){newNote.tag = tag};

        //Find the note to be updated and update it
        let note = await Note.findById(req.params.id);

        //If the note does not exist
        if(!note){return res.status(404).send("Not found")} 

        //if user's id and the note's id doesn't match then there is someone who is trying to crud with someone else's notes
        if(note.user.toString() !== req.user.id)
        {
            return res.status(401).send("Not Allowed");
        }

        //Here in this case the note exists
        note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
        res.json({note})
    })
    




module.exports = router