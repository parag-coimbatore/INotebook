const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');



//Create a user using: POST "/api/auth/". Doesnt require auth


router.post('/', [

    // These validators are taken from express validator website
    // email must be an email
    body('email', 'Enter a valid email').isEmail(),

    // name must be at least 3 chars long
    body('name', 'Enter a valid name').isLength({ min: 3 }),

    // password must be at least 5 chars long
    body('password', 'Password should be minimum 5 char').isLength({ min: 5 }),

], (req, res) => {

    // Here is what to do if the error occurs 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    }).then(user => res.json(user))
    .catch(err=> {console.log(err)
    res.json({error: 'Please enter a unique value', message: err.message})})  //we get  error and message if someone is trying to make account with same email


})

module.exports = router