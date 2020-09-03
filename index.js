// Event Listeners
const axiosPost = document.querySelector("#post-btn");
const axiosGet = document.querySelector("#get-btn");
const axiosPut = document.querySelector("#put-btn");
const axiosPatch = document.querySelector("#patch-btn");
const axiosDelete = document.querySelector("#del-btn");

// Headers
const headers = {
	headers: {
		"Content-type": "application/json; charset=UTF-8",
	},
};

// DRY function

const axiosRest = async (method, url, payload, headers) => {
	console.log("btn clicked");
	console.log(method, url, payload, headers);
	await axios[method](url, payload, headers)
		.then(function (response) {
			console.log(response);
			document.getElementById("summary").innerHTML =
				"Success!" +
				"<br> Method: " +
				response.config.method.toUpperCase() +
				"<br> Status: " +
				response.status +
				"<br> Body: " +
				response.data.body;
		})
		.catch(function (error) {
			console.log(error);
		});
};

//Event Handlers

axiosPost.addEventListener("click", function () {
	axiosRest(
		"post",
		"https://jsonplaceholder.typicode.com/posts",
		{
			title: "foo",
			body: "bar",
			userId: 1,
		},
		headers
	);
});

axiosGet.addEventListener("click", function () {
	axiosRest("get", "https://jsonplaceholder.typicode.com/posts/1");
});

axiosPut.addEventListener("click", function () {
	axiosRest(
		"put",
		"https://jsonplaceholder.typicode.com/posts/1",
		{
			title: "foo",
			body: "bar",
			userId: 1,
		},
		headers
	);
});

axiosPatch.addEventListener("click", function () {
	axiosRest(
		"patch",
		"https://jsonplaceholder.typicode.com/posts/1",
		{
			title: "foo",
		},
		headers
	);
});

axiosDelete.addEventListener("click", function () {
	axiosRest("delete", "https://jsonplaceholder.typicode.com/posts/1");
});
