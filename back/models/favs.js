const S = require('sequelize');
const db = require('./db');
const User = require('./user');

class Favs extends S.Model {}

Favs.init({
    favourite_movies: {
        type: S.STRING
    }
}, { sequelize: db, modelName: 'favs' })

module.exports = Favs;
Favs.belongsTo(User);