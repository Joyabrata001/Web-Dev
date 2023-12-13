const fs = require("fs");

// fs.writeFile("message.txt", "Hello From NodeJS", (err) => {
//     if (err) throw err;
//     console.log("The file's been saved");
// });

fs.appendFile('message.txt', '\nMy name is Joy', (err) => {
    if (err) throw err;
    console.log('The data was appended to file!');
});

fs.readFile("message.txt", 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});