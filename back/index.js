const express = require('express');
const app = express();
const db = require('./models/db');
const User = require('./models/user');
const sequelize = require('sequelize');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: "henry" }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
    function (username, password, done) {
        User.findOne({ where: { username: username } })
            .then(user => {
                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' });
                }
                if (!user.validPassword(password)) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user);
            })
            .catch(done);
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User.findByPk(id)
    .then( user => done(null, user))
})

app.post('/register', (req, res) => {
    User.create(req.body).then( user => res.send(user));
})

app.post('/login', passport.authenticate('local'), (req, res, next) => {
    res.json(req.user)
})

app.post('/logout', (req, res)=> {
    if(req.isAuthenticated) req.logOut();
    res.redirect('/')
})

db.sync().then(() => {
    console.log('DB synched');    
    app.listen(3000, () => console.log('listening on 3000'));
}).catch(console.log)