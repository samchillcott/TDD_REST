// import axios from "axios";

// Imitates creating a resource (POST) at JSONPlaceholder

const axiosPost = document.querySelector("#post-btn");

const post = () => {
	console.log("btn clicked");
	axios
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

const get = () => {
	console.log("btn clicked");
	axios
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

// this works in the browser
// export default post;
