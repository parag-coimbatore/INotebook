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




module.exports = router