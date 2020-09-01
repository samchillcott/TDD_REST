// import * as fetch from 'node-fetch';
// const { fetch } = require("node-fetch");
// import axios from "axios";
try {
	const axios = require("axios").default;
} catch {}

// if (typeof window === "undefined") {
// 	const axios = require("axios").default;
// 	// import axios from "axios";
// }

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

// const post = () {
// 	fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8"
//     }
//   })
//   .then(response => response.json())
//   .then(json => console.log(json))
// }

post();

// exports.post = post;

// this works in the browser
export default post;

// module.exports = {
// 	post
// }
