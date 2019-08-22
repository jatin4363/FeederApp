const route = require('express').Router()
const passport = require('../passport')
const Users = require('../db').Users
const path = require('path')

route.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'signin.html'))
})

route.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'signup.html'))
})

route.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/')
})

route.post('/signin', passport.authenticate('local', {
    failureRedirect: '/signin',
    successRedirect: '/feed'
}))


// let genValue = ""
// function getGenderValue (){
//     if (Document.getElementById('male').checked) {
//         genValue = "Male"
//     }
//     else if (Document.getElementById('female').checked) {
//         genValue = "Female"
//     }
//     else if (Document.getElementById('other').checked) {
//         genValue = "Other"
//     }
// }


route.post('/signup', (req, res) => {
    // getGenderValue()
    Users.create({
        username: req.body.username,
        password: req.body.password,
        fname: req.body.firstname,
        lname: req.body.lastname,
        // gender: genValue,
        dob: req.body.dateofbirth
    }).then(() => {
        res.redirect('/signin')
    })
})

route.get('/feed' , (req,res)=>{
    // res.sendFile(path.join(__dirname, '../public', 'feed.html'))
    if(req.user){
        // console.log(req.user)
        console.log("Full Name : " + req.user.fname +" "+ req.user.lname )
        console.log("Username : " + req.user.username)
        res.sendFile(path.join(__dirname, '../public', 'feed.html'))
    }else{
        res.redirect('/signin')
    }
}) 

exports = module.exports = route