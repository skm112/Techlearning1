var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var db = require("../models/User");
var auth = require("../auth/auth");

//@type         POST
//@route        /auth/user/signup
//@desc         user register
//@access       PUBLIC
router.post('/signup', (req, res) => {
    console.log("save Post");
    console.log(req.body);

    db.findOne({ username: req.body.username }, (err, existuser) => {
        if (existuser) {
            return res.send({ success: false, message: "username already exists ..." });
        }
        else {
            var user = new db({
                username: req.body.username,
                password: req.body.password,
                fullname: req.body.fullname,
                email: req.body.email
            });
            console.log(user);

            user.save((err, doc) => {
                if (err) {
                    return res.send({ success: false, message: err.message })
                };
                res.send({ success: true, message: "All detail saved ..." })
            })
        }
    })
})

//@type         POST
//@route        /auth/user/signin
//@desc         user login
//@access       PUBLIC
router.post('/signin', (req, res) => {

    db.findOne({ username: req.body.username }, '+password', (err, user) => {
        if (!user) {
            return res.send({ success: false, message: "username incorrect ..." })
        } else {
            user.comparePassword(req.body.password, (err, isMatch) => {
                if (!isMatch) {
                    return res.send({ success: false, message: "password incorrect ..." });
                }
                res.send({ success: true, token: auth.createJWT(user), username: user.username });
            })
        }
    })
})

//@type         GET
//@route        /auth/user/me
//@desc         user profile
//@access       PRIVATE
router.get('/me', auth.ensureAuthenticated, (req, res) => {
    console.log(req.headers);

    db.findOne({ '_id': mongoose.Types.ObjectId(req.user) }, (err, doc) => {
        if (!doc) {
            return res.send({ success: false, message: "username incorrect ..." })
        } else {
            res.json(doc);
        }
    })
})


module.exports = router;