const express = require("express")
const app = express()
const { json, urlencoded } = require('express')
const mongoose = require('mongoose')
const Review = require("./app/models/Review")
const PORT = process.env.PORT || 4000
const dotenv = require('dotenv')
const cors = require('cors')
const dbURL = 'mongodb+srv://portfolio-review:myAdeseyiReview@portfolio.bs2nhbj.mongodb.net/reviews?retryWrites=true&w=majority'


dotenv.config()
//connect to mogongodb
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {

        app.listen(PORT, () => {
            console.log("We are live on port " + PORT)
        })

        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))

// This scetion were disabled because of untracked problem
// // Add headers before the routes are defined
app.use(function (req, res, next) {
    console.log(req)
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://oluwaseyiportfolio.vercel.app');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// End of untracked problem




app.get('/', (req, res) => {
    Review.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.post('/', (req, res) => {
    console.log(req.body)
    const review = new Review(req.body.reviewData)
    review.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.send(err)
        })
})

