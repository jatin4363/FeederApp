const Sequelize = require('sequelize')
const db = new Sequelize('feeddb', 'feeder', 'feederpass', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0
    }
});
const Tweet = db.define('tweets', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

db.sync()
    .then(() => console.log("Database has been created"))
    .catch((err) => console.log('Error creating database'))

exports = module.exports = {
    Tweet
}