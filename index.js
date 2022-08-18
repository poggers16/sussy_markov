const Markov = require('js-markov');
let data = require('./arrays.json');

const hell = new Markov();

hell.addStates(data.table);

hell.train();

function generateText() {
    let text = hell.generateRandom();
    if (text === ' ') {
        generateText();
    }

    return text;
}

console.log(generateText());

let args = process.argv.slice(2);

if (args[0] === "--reset") {
    hell.clearChain();
}