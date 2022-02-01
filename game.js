String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

let word = "bonjour";

class Game {
    constructor() {
        this.tries = 5;
        this.word = "bonjour";
        this.unknowWord = word.replace(/./g, 'x');
    }



    print() {
        return this.unknowWord;
    }
    
    guess(letter){

        if(this.tries > 0) {
            if(this.word.includes(letter)) {
                const indexOf = word.indexOf(letter)
                this.unknowWord = this.unknowWord.replaceAt(indexOf, letter)
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
    }
    
}

module.exports = Game;