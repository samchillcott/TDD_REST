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

// Imitates updating a resource (PUT) at JSONPlaceholder

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

// Imitates updating a resource (one field using PATCH) at JSONPlaceholder

const axiosPatch = document.querySelector("#patch-btn");

const patch = async () => {
	console.log("btn clicked");
	await axios
		.patch("https://jsonplaceholder.typicode.com/posts/1", {
			title: "foo",
		})
		.then(function (response) {
			console.log(response);
			alert("Data patched. Status: " + response.status);
		})
		.catch(function (error) {
			console.log(error);
		});
};

axiosPatch.addEventListener("click", patch);

// Imitates deleting a resource (DELETE) at JSONPlaceholder

const axiosDelete = document.querySelector("#del-btn");

const del = async () => {
	console.log("btn clicked");
	await axios
		.delete("https://jsonplaceholder.typicode.com/posts/1")
		.then(function (response) {
			console.log(response);
			alert("Data deleted. Status: " + response.status);
		})
		.catch(function (error) {
			console.log(error);
		});
};

axiosDelete.addEventListener("click", del);

// this works in the browser
// export default post;
