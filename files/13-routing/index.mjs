import express from 'express';
const app = express()

//1. Δρομολόγηση με το application object (app.VERB())
app.get('/books/children', (req, res) => res.send('Get a book for children'))

//2. Δρομολόγηση με τη μέθοδο app.route()
app.route('/books/fiction')
    .get(function (req, res) {
        res.send('Get a fiction book')
    })
    .post(function (req, res) {
        res.send('Add a fiction book')
    })
    .put(function (req, res) {
        res.send('Update the book')
    })

//3. Δρομολόγηση με την κλάση Router
const router = express.Router()

router.get('/non-fiction/:role/:name', function (req, res) {
    console.log("route hit:", req.originalUrl)
    console.log("request query:", req.query, JSON.stringify(req.query))
    console.log("request params:", req.params)
    console.log("request route:", req.route)
    console.log("request body:", req.body)
    console.log("request header:", req.header)
    res.send('Get a non-fiction book')
})

app.use('/books', router)


app.listen(3000, () => console.log('Ready'))