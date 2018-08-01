const readline = require("readline");

const read = readline.createInterface({
	input: process.stdin, // process standard input
	output: process.stdout // process standard output
});

read.question("What do you think of Node.js?", answer => {
	console.log(`Thank you for your valuable feedback: ${answer}`);
	read.close();
});
