const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');



//Create a user using: POST "/api/auth/createuser". Doesnt require auth. No Login required


router.post('/createuser', [

    // These validators are taken from express validator website
    // email must be an email
    body('email', 'Enter a valid email').isEmail(),

    // name must be at least 3 chars long
    body('name', 'Enter a valid name').isLength({ min: 3 }),

    // password must be at least 5 chars long
    body('password', 'Password should be minimum 5 char').isLength({ min: 5 }),

], async (req, res) => {

    // Here is what to do if the error occurs 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //Checking whether the user with this exists already
    try {


        let user = await User.findOne({ email: req.body.email });
        //if user exists
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }
        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        })

        res.json(user)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})

module.exports = router