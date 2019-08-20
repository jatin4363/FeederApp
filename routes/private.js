const route = require('express').Router()
const path = require('path')

route.get('/' , (req,res)=>{
    // res.sendFile(path.join(__dirname, '../public', 'feed.html'))
    if(req.user){
        // console.log(req.user)
        // console.log("Full Name : " + req.user.fname +" "+ req.user.lname )
        // console.log("Username : " + req.user.username)
        res.sendFile(path.join(__dirname, '../public', 'feed.html'))
    }else{
        res.redirect('/signin')
    }
}) 

exports = module.exports = route