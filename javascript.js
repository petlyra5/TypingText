class TypingText {
    constructor({selector, text}) {
        this.selector = document.querySelector(selector);
        this.text = text;
        this.letter = '';
        this.i = null;
        this.arr = [];

    }
    
    breakUp(n) {
        this.i = 0;
        let art = setInterval(() => {
            if (this.i <= this.text[n].length) {
                this.selector.setAttribute('placeholder', this.text[n].slice(0,this.i++) + '|');
            } else {
                clearInterval(art);
                setTimeout(() => {
                    this.breakDoun(n);
                }, 1000);
            }
        }, 120);
    }

    breakDoun(n) {
        let num = this.text[n].length;
        let art2 = setInterval(() => {
            if (num >= 0) {
                this.selector.setAttribute('placeholder', this.text[n].slice(0,num--) + '|');
            } else {
                clearInterval(art2);
                setTimeout(() => {
                    this.breakUp(Math.floor(Math.random() * this.text.length));
                }, 1000);
            }
        }, 60);
    }

    init() {
        this.breakUp(0);
    }
}

new TypingText({
    selector: 'input',
    text: [
        'Buy filter',
        'Filter for cleaning',
        'iPhone x12'
    ]
}).init();