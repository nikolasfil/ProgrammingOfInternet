import express from 'express'
const app = express()

import { cocktailRecipes } from './cocktail-recipes.mjs'

// //1. Δρομολόγηση με το application object (app.VERB())
// app.get('/recipe/breakfast', (req, res) => res.send('Get a recipe for breakfast'))

// //2. Δρομολόγηση με τη μέθοδο app.route()
// app.route('/recipe/soup')
//     .get(function (req, res) {
//         res.send('Get a soup recipe')
//     })
//     .post(function (req, res) {
//         res.send('Add a soup recipe')
//     })
//     .put(function (req, res) {
//         res.send('Update the soup recipe')
//     })

app.get('/recipe', function (req, res, next) {
    for (const key in req.query) {
        console.log(key, ":", req.query[key])
        next()
    }
    res.send("got a recipe.")
})

app.get('/recipe/difficulty/:difficulty/rating/:rating', function (req, res, next) {
    console.log(req.params)
    res.send("got a recipe.")
})


app.use(express.urlencoded({ extended: true }))

app.post('/', (req, res) => {
    console.log("request body:", req.body)
    res.send("post ok")
})
//3. Δρομολόγηση με την κλάση Router
// app.use('/recipe', cocktailRecipes)


app.listen(3000, () => console.log('Ready'))