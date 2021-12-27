var jwt = require('jsonwebtoken'); //importing jwt and jsonwebtoken
const JWT_SECRET = 'paragisagoodbo$y';


const fetchuser = (req, res, next) => {

    //Getting the user from the jwt token and add id to the req object

    //Firstly we get the token
    const token = req.header('auth-token');

    //if the token is not there
    if (!token) {
        res.status(401).send({ error: "Please authenticate using token" });
    }

    //if the token is invalid
    try {
        //
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user
        next()
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using token" });
    }


}
module.exports = fetchuser;