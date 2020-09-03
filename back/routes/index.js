const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Favs = require("../models/favs");
const passport = require("passport");
const { sequelize } = require("../models/User");

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
    User.findAll({where: {
        username: req.params.username
    }})
    .then(user => {
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

router.post("/addFav", (req,res) => {
    Favs.create({
        favourite_movies: req.body.fav
    })
    .then(fav => {
        fav.setUser(req.body.userId)
    })
    .then(() => res.status(201).send('added to favourites'))
})

router.get(":user/getFavs", (req, res) =>{
    Favs.findAll({
        where: {
            userId: req.params.user
        }
    }).then(favs => {
        res.status(200).send(favs)
    })
})

module.exports = router
