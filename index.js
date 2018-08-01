const colors = require("colors");

const PEOPLE = require("./data/people.js");
const SAIYANS = require("./data/saiyans.js");

const displayContacts = DATA => {
	const MAPPED_DATA = DATA.map(({ name, phoneNumber }) => {
		return {
			name: name,
			phone: phoneNumber
		};
	});
	console.log(colors.rainbow(JSON.stringify(MAPPED_DATA)));
};

displayContacts(PEOPLE);
displayContacts(SAIYANS);
