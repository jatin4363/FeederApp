const express = require('express')
const app = express()
const path = require('path')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/content', require('./routes/content'))

app.listen(4444, () => console.log("Server started at http://localhost:4444"))