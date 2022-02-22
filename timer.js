
class Timer {
    constructor() {
        
        this.sec = 0;
        this.min = 0;
        this.hrs = 0;
        this.t;
    }


    tick() {
        this.sec++;
        if (this.sec >= 60) {
            this.sec = 0;
            this.min++;
            if (this.min >= 60) {
                this.min = 0;
                this.hrs++;
            }
        }
    }
    add() {
        tick();
        h1.textContent = (this.hrs > 9 ? this.hrs : "0" + this.hrs) 
                 + ":" + (this.min > 9 ? this.min : "0" + this.min)
                    + ":" + (this.sec > 9 ? this.sec : "0" + this.sec);
        timer();
    }
    timer() {
        this.t = setTimeout(add, 1000);
    }

    reset() {
        this.h1.textContent = "00:00:00";
        this.sec = 0; 
        this.min = 0; 
        this.hrs = 0;
        
    }
 
}

module.exports = Timer;