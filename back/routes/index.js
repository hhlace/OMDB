const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");

router.post("/register", (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
        }
    )
    .then((user) => {
        res.status(201).send(user)
    })
    .catch((err) => {
        res.status(409).send('Email already exists')
    })

});

/* router.get("/register/check/:username", (req, res) => {
    console.log('llegue')
    User.findAll({where: {
        username: req.params.username
    }})
    .then(user => {
        console.log('uuuuu', user)
        if(user.length > 0){res.sendStatus(409)}else{res.sendStatus(200)}
        
    })
}) */
  
router.post('/login', passport.authenticate('local'), (req, res, next) => {
    res.json(req.user)
} ) ;

router.post("/logout", (req, res) => {
    if (req.isAuthenticated) req.logOut();
    res.redirect("/");
});

module.exports = router
