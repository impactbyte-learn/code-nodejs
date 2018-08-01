const axios = require("axios");

const API_URL = `https://swapi.co/api/people/1/?format=json`;

axios
	.get(API_URL)
	.then(response => {
		console.log(response);
	})
	.catch(error => {
		console.log(error);
	});
