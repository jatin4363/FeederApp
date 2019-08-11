const route = require("express").Router()
const Tweet = require("../db").Tweet

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
    Tweet.create({
        author: req.body.author,
        content: req.body.content
    }).then((tweet) => {
        res.status(201).send(tweet)
    }).catch((err) => res.status(501).send({
        error: "Could not add new tweet..."
    }))
})

exports = module.exports = route
