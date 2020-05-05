const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const data = require("./data")

server.set("view engine", "njk")

server.use(express.static("public"))

nunjucks.configure("views", {
    express: server,
    autoescape: false 
})

server.get("/", function(req, res){
    return res.render("home", { recipes:data })
})

server.get("/about", function(req, res){
    return res.render("about")
})

server.get("/recipeslist", function(req, res){
    return res.render("recipeslist", { recipes:data })
})

server.get("/recipedetails/:index", function (req, res) {
    const recipes = data;
    const recipeIndex = req.params.index;
    const recipe = (recipes[recipeIndex]);

    return res.render("recipedetails", { recipe:recipe })
  })

server.listen(5000, function(){})