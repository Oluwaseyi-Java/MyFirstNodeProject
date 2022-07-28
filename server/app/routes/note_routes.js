const {data} =require("../data")

module.exports = function (app, db) {


    app.get("/notes", (req, res) => {
        res.send(data)
    })

    app.post("/notes", (req, res) => {
        // will create the note here

        if (!req.body || req.body=={}) {
            return res.json({
                message:"fields cannot be empty"
            })
        }
        console.log(req.body.reviewData)
        data.push(req.body.reviewData)
        res.json({ data:"Hello"})
    })
}