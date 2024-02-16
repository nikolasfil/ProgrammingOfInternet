import express from 'express'
const app = express()

const myMiddleware1 = (req, res, next) => {
    console.log('MW-1')
    next()
}

const myMiddleware2 = (req, res, next) => {
    console.log('MW-2')
    next()
}

app.use(myMiddleware1)
app.use(myMiddleware2)


app.get('/', (req, res) => {
    console.log('GET /')
    res.send('Hello World!')
})

app.get('/t', (req, res) => {
    console.log('GET /t')
    res.send('Hello t!')
})


app.listen(3000)
