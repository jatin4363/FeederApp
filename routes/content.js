const route = require("express").Router()
const Tweet = require("../db").Tweet
// const Users = require("../db").Users

route.get('/', (req, res) => {
    // sends an array of all tweets from database
    Tweet.findAll()
        .then((tweets) => {
            res.status(200).send(tweets)
        })
        .catch((err) => {
            res.status(500).send({
                error: 'Could not retrieve the tweets...'
            })
        })
})

route.post('/', (req, res) => {
    // creates a new tweet and add in database
    console.log(req.user)
    // console.log(req.user.fname + " " + req.user.lname)
    Tweet.create({
        fullname: req.user.fname + " " + req.user.lname,
        author: req.user.username,
        content: req.body.content
    }).then((tweet) => {
        res.status(201).send(tweet)
    }).catch((err) => res.status(501).send({
        error: "Could not add new tweet..."
    }))
})

route.delete('/:id', (req, res) => {
    // console.log("We were right id : " + req.params.id)
    Tweet.destroy({
        where: { id: req.params.id }
    })
})

exports = module.exports = route
