const UserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const loginPost = async (req, res)=>{
    const {email, password} = req.body;
    try {
        const user = await UserModel.findOne({ email })
    
        if (!user) {
          res.status(401).send({ status: 'error', msg: "Invalid User" })
        } else {
          //Generate the token
          const isMatch = await bcrypt.compare(password, user.password)
    
          if (!isMatch) {
            res.status(401).send({ status: 'error', msg: "Invalid Password" })
          }
    
          const userPayload = { email: user.email, name: user.name, isAdmin: user.isAdmin }
          const token = jwt.sign(userPayload, process.env.JWT_SECRET_KEY, { algorithm: 'HS384', expiresIn: '1d' })
          console.log(token)

          res.cookie('jwt', token, { maxAge: 24 * 60 * 60 })
          res.send({ status: 'success', user, token })
        }
    
      } catch (err) {
        res.status(500).send({ status: 'error', err: err })
      }

    res.send(postData);
}

module.exports = {
    loginPost
}