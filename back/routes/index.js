const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");

router.post("/register", (req, res) => {
    User.create(req.body).then((user) => res.send(user));
  });
  
router.post('/login', passport.authenticate('local'), (req, res, next) => {
    res.json(req.user)
} ) ;

router.post("/logout", (req, res) => {
    if (req.isAuthenticated) req.logOut();
    res.redirect("/");
});

module.exports = router