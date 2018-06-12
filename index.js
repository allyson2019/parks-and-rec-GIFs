var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')

var server = express()

server.use(logger('dev')) //log all requests to our terminal
server.use(bodyParser.json()) //get access to all post requests, attaches all user input to request.body
server.use(bodyParser.urlencoded({extended:false})) //

server.set('view engine', 'ejs')
server.use(express.static('views'))
server.set('views', __dirname+'/views')

server.get('/', function(request, response){
    //response.send('<h1>pineapple on pizza?</h1>')
    response.render('home.ejs')
})
server.get('/characters', function(request, response){
    response.render('characters.ejs')
})
server.get('/tom', function(request, response){
    response.render('tom.ejs')
})
server.get('/andy', function(request, response){
    response.render('andy.ejs')
})
server.get('/april', function(request, response){
    response.render('april.ejs')
})
server.get('/ron', function(request, response){
    response.render('ron.ejs')
})
server.get('/leslie', function(request, response){
    response.render('leslie.ejs')
})
server.get('/ben', function(request, response){
    response.render('ben.ejs')
})
server.get('/ann', function(request, response){
    response.render('ann.ejs')
})
server.get('/chris', function(request, response){
    response.render('chris.ejs')
})
server.get('/donna', function(request, response){
    response.render('donna.ejs')
})
server.get('/about', function(request, response){
    response.render('about.ejs')
})
server.get('/gallery', function(request, response){
    response.render('gallery.ejs')
})
server.post('/', function(request, response){
    console.log(request.body.people)
    //take list of names and split by commas into an array
    var names = request.body.people.split(',')
    //create a loop that rendomly picks two people and groups them together
    //add that group to a bigger array
    //when we have used up all the poeple we stop the loop
    var groups = [ ]
    var currentGroup = [ ]
    while (names.length > 0) {
        var randomNumber = Math.floor(Math.random() * names.length)
        var person = names[randomNumber]
        currentGroup.push(person)
        names.splice(randomNumber, 1)
        if (currentGroup.length >= 2) {
        groups.push(currentGroup)
        currentGroup = [ ]
        }
    }
    console.log(groups)
    response.render('results.ejs', { data: groups })
})
var port = process.env.PORT

server.listen(port, () => {
    console.log('Sever listening on port '+port)
})