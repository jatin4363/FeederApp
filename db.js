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
    fullname: { 
        type:Sequelize.STRING,
        allowNull:false
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

const Users = db.define('users' , {
    username : {
        type:Sequelize.STRING,
        unique : true,
        allowNull:false
    },
    password: {
        type:Sequelize.STRING,
        allowNull:false
    },
    fname:{
        allowNull:false,
        type:Sequelize.STRING
    },
    lname:{
        allowNull:false,
        type:Sequelize.STRING
    },
    dob:{
        allowNull:false,
        type:Sequelize.STRING
    }
})

db.sync()
    .then(() => console.log("Database has been created"))
    .catch((err) => console.log('Error creating database'))

exports = module.exports = {
    Tweet , Users , db
}