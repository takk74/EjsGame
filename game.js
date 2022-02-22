const Timer = require("./timer");

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

let word = "bonjour";

class Game {
    constructor() {
        this.tries = 5;
        this.word = "bonjour";
        this.unknowWord = word.replace(/./g, '#');
        this.timer = new Timer();
    }


    print() {
        return this.unknowWord;
        
    }

    
    guess(letter){

        if(this.tries > 0) {
            if(this.word.includes(letter)) {
                for(const index in word) {
                    if (word.hasOwnProperty(index)) {
                        console.log(word[index]);
                        if(word[index] == letter) {
                            this.unknowWord = this.unknowWord.replaceAt(index, letter);
                        }  
                    }                  
                }
                return true;

            } else {
                this.tries--;
                return false;
            }
        } 
        
    }
    getTries() {
        return this.tries;
    }
    reset() {
        this.tries = 5;
        this.unknowWord = word.replace(/./g, '#');
        this.timer.reset()
    }
    
}

module.exports = Game;