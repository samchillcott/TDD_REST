// import * as fetch from 'node-fetch';
// const { fetch } = require("node-fetch");
const { axios } = require("axios");
// import axios from 'axios';

const post = () => {
	axios
		.post("https://jsonplaceholder.typicode.com/posts", {
			title: "foo",
			body: "bar",
			userId: 1,
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
	// return {
	// 	status: 200,
	// };
};

post();

exports.post = post;
