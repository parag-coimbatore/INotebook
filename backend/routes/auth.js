const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken'); //importing jwt and jsonwebtoken
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'paragisagoodbo$y';



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

    const salt = await bcrypt.genSalt(10); //as per documentation if we write bcrypt.gensalt we will get a salt generated
    const secPass = await bcrypt.hash(req.body.password, salt) //hashing our password with salt 

    //Creating a user 
    user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email
    });


    //Identifying our user with id
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);

    // res.json(user)
    res.json({ authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured")
  }
})

// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', [
  // These validators are taken from express validator website
  // email must be an email
  body('email', 'Enter a valid email').isEmail(),

  // password must be at least 5 chars long
  body('password', 'Password cannot be blank').exists(),

], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //Removing our email and password from req.body from the db
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 3: Get logged in user details using: POST "/api/auth/getuser". login required
//Here we will b fetching the data from the jwt authtoken

router.post('/getuser',fetchuser, async (req, res) => { //here fetchuser is a middleware which is a function

  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");  //fetching the user details without password
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

module.exports = router