const express = require("express")
const MongoClient = require("mongodb").MongoClient
// const bodyParser = require("body-parser")

const cors = require("cors")
const { json, urlencoded } = require('express')
const app = express()

// app.use(bodyParser.urlencoded({ extended: true }))
const Port = process.env.PORT || 4000



app.use(cors())
app.use(json())
app.use(urlencoded({ extended: false }))




require('./app/routes')(app, {})

app.listen(Port, () => {
    console.log("We are live on port " + Port)
})

// This scetion were disabled because of untracked problem

// app.use(urlencoded({ extended: false }))

// // Add headers before the routes are defined
// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });
//
// End of untracked problem

// mongodb + srv://Adeseyi:<password>@portfolio.bs2nhbj.mongodb.net/?retryWrites=true&w=majority