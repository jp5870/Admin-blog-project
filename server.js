const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 8000


app.use(express.static('public'))
app.use('/profile',express.static('uploads'))
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.set('view engine', 'ejs');
// Routing

const View_Route = require('./route/View_Route')
const Blog_Route = require('./route/Blog_Route')
const { dbConnect } = require('./Config/dbConnect') 
dbConnect()
app.use('/',View_Route)  
app.use('/api/blog',Blog_Route)
app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))