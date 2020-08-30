// import * as fetch from 'node-fetch';
const { fetch } = require("node-fetch");

const post = () => {
	fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		body: JSON.stringify({
			title: "foo",
			body: "bar",
			userId: 1,
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	})
		.then((response) => response.json())
		.then((json) => console.log(json));
	// return {
	// 	status: 200,
	// };
};

post();

exports.post = post;
