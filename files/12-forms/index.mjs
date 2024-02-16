import express from 'express';

const app = express()

app.get('/', (req, res) => {
    let resString = "";
    for (const key in req.query) {
        resString += (key + ":" + req.query[key] + "\n");
    }
    console.log(resString);
    res.send(resString);
})

app.get('/about', (req, res) => {
    console.log('redirecting to / ....')
    res.redirect("/")
})

app.use(express.urlencoded({ extended: true }))

app.post('/', (req, res) => {
    console.log("new request ")
    console.log("request query: ", req.query) // .....?key=val&key2=val2
    console.log("request params: ", req.params) //http://localhost:3000/users/34/books/8989
    console.log("request method: ", req.method)
    console.log("request body: ", req.body)
    console.log("request headers: ", req.headers)
    res.end('ok')
})

app.listen(3000)