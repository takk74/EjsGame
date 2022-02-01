
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
            if(letter === 'a') {
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