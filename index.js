// import axios from "axios";
const axiosPost = document.querySelector("#post-btn");

// Imitates creating a resource (POST) at JSONPlaceholder
const post = () => {
	console.log("post clicked");
	axios
		.post("https://jsonplaceholder.typicode.com/posts", {
			title: "foo",
			body: "bar",
			userId: 1,
		})
		.then(function (response) {
			console.log(response);
			alert("Data Posted");
		})
		.catch(function (error) {
			console.log(error);
		});
};

axiosPost.addEventListener("click", post);

// post();

// this works in the browser
// export default post;
