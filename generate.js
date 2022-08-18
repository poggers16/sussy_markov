const fs = require('fs')
let main = require('./main.json');

const exportarr = {
    table: []
};

console.log(main);


for(i = 0; i < main.messages.length; i++) {
    exportarr.table.push(main.messages[i].content);
};

const exportarr2 = JSON.stringify(exportarr);

const write = fs.writeFile('./arrays.json', exportarr2, err => {
    if (err) {
        console.log("Failed to write file: " + err);
    } else {
        console.log('Successfully wrote file.');
    };
})