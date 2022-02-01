require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT;
const app = express();
const Game = require('./game');

const game = new Game();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.set('view engine', 'ejs')

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`)
})

app.get('/', (request, response) => {
  response.render('pages/index', {game : undefined , tries: game.getTries() , word: game.print()} );
  
})

app.post('/', (request , response) => {
    var inputData = request.body.try;
    response.body.game.guess();
})

