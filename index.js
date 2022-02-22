require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT;
const app = express();
const Game = require('./game');
const Timer = require('./timer');

const game = new Game();
const timer = new Timer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.set('view engine', 'ejs')

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`)
})

app.get('/', (request, response) => {
  response.render('pages/index', {game : undefined , tries: game.getTries() , unknowWord: game.print()} );
  
})

app.post('/', (request , response) => {

  if( request.body.reset) {
    game.reset();
  } else {
    let guess = game.guess(request.body.inputData);
  }

  response.render('pages/index', {game : undefined , tries: game.getTries() , unknowWord: game.print() });
})

