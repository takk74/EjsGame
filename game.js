
let word = "bonjour";

class Game {
    constructor() {
        this.tries = 5;
    
    }

    print() {
        return word;
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
        return true;
            
  
    }
    getTries() {
        return this.tries;
    }
    reset() {
        this.tries = 5;
    }
    
}

module.exports = Game;