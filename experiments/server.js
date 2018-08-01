const http = require("http");
const port = 3000;

const PEOPLE = require("../data/people.js");
const SAIYANS = require("../data/saiyans.js");

const requestHandler = (request, response) => {
	const data = {
		people: PEOPLE,
		saiyans: SAIYANS
	};

	response.setHeader("Content-Type", "application/json");
	response.write(JSON.stringify(data));
	response.end();
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
	if (err) console.log(`Something bad happened`, err);
	console.log(`Server is listening on ${port}`);
});
