const express = require('express')
const session = require('express-session')
const passport = require('./passport')
const app = express()
const path = require('path')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret:'secretmessagehasbeenwrittenhere'
}))

app.use(passport.initialize())
app.use(passport.session())


app.use('/', require('./routes/root'))
app.use('/', express.static(path.join(__dirname, 'public')))


app.use('/content', require('./routes/content'))

app.listen(4444, () => console.log("Server started at http://localhost:4444"))