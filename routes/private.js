const route = require('express').Router()
const path = require('path')

route.get('/' , (req,res)=>{
    // res.sendFile(path.join(__dirname, '../public', 'feed.html'))
    if(req.user){
        console.log('atleast we did this much when loggin')
        res.sendFile(path.join(__dirname, '../public', 'feed.html'))
    }else{
        console.log('atleast we did this much when not loggin')
        res.redirect('/signin')
    }
}) 

exports = module.exports = route