// import axios from "axios";

// Imitates creating a resource (POST) at JSONPlaceholder

const axiosPost = document.querySelector("#post-btn");

const post = async () => {
	console.log("btn clicked");
	await axios
		.post("https://jsonplaceholder.typicode.com/posts", {
			title: "foo",
			body: "bar",
			userId: 1,
		})
		.then(function (response) {
			console.log(response);
			alert("Data Posted. Status: " + response.status);
		})
		.catch(function (error) {
			console.log(error);
		});
};

axiosPost.addEventListener("click", post);

// Fetches a resource (GET) from JSONPlaceholder

const axiosGet = document.querySelector("#get-btn");

const get = async () => {
	console.log("btn clicked");
	await axios
		.get("https://jsonplaceholder.typicode.com/posts/1")
		.then(function (response) {
			console.log(response);
			alert("Data Fetched. Status: " + response.status);
		})
		.catch(function (error) {
			console.log(error);
		});
};

axiosGet.addEventListener("click", get);

// Imitates putting a resource (PUT) at JSONPlaceholder

const axiosPut = document.querySelector("#put-btn");

const put = async () => {
	console.log("btn clicked");
	await axios
		.put("https://jsonplaceholder.typicode.com/posts/1", {
			title: "foo",
			body: "bar",
			userId: 1,
		})
		.then(function (response) {
			console.log(response);
			alert("Data Put. Status: " + response.status);
		})
		.catch(function (error) {
			console.log(error);
		});
};

axiosPut.addEventListener("click", put);

// this works in the browser
// export default post;
