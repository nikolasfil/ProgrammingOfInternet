import express from 'express'

export const cocktailRecipes = express.Router()

cocktailRecipes.get('/coctail/:spirit', function (req, res) {
    console.log("route hit:", req.originalUrl)
    console.log("request query:", req.query, JSON.stringify(req.query))
    console.log("request params:", req.params)
    console.log("request route:", req.route)
    console.log("request body:", req.body)
    console.log("request header:", req.header)
    res.send('Get a cocktail recipe book')
})

