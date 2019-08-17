const route = require('express').Router()
const passport = require('../passport')
const Users = require('../db')
const path = require('path')

route.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'signin.html'))
})

route.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'signup.html'))
})

route.post('/signin', passport.authenticate('local', {
    failureRedirect: '/signin',
    successRedirect: '/private'
}))


let genValue = ""
function getGenderValue (){
    if (document.getElementById('male').checked) {
        genValue = "Male"
    }
    else if (document.getElementById('female').checked) {
        genValue = "Female"
    }
    else if (document.getElementById('other').checked) {
        genValue = "Other"
    }
}


route.post('/signup', (req, res) => {
    getGenderValue()
    Users.create({
        username: req.body.username,
        password: req.body.password,
        fname: req.body.firstname,
        lname: req.body.lastname,
        gender: genValue,
        dob: req.body.dateofbirth
    }).then(() => {
        res.redirect('/signin')
    })
})

exports = module.exports = route