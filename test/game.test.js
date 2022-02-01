const Game = require('../game.js');
const assert = require('assert').strict;
const game = new Game();
describe('Game test', function() {

    it('check if tries = 5', function() {
      assert.equal(game.tries, 5);
    });

    it('guessing a wrong letter ', function() {
      assert.equal(game.guess('b'), false);
    });

    it('check if tries -1', function() {
      assert.equal(game.tries, 4);
    });

    it('guessing a good letter ', function() {
      assert.equal(game.guess('a'), true);
    });

    it('check if tries tries counter', function() {
      assert.equal(game.tries, 4);
    });

    it('check if the game is over', function() {
      assert.equal(game.tries, true);
    });

});