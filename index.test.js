const { post, get, put, patch, del } = require("./index.js");
// const axios = require("axios");
import axios from "axios";
// const axios = require('axios').default;
// window.axios=require('axios');


// POST

describe("post function", () => {
	it("should exist", () => {
		expect(post()).not.toBe(null);
	});

	it("should return an object", () => {
		expect(post()).toEqual({});
	});
	it("should return an object with status code 201", () => {
		expect(post()).toHaveProperty("request.status", 200);
	});
	// it("should return an object with a payload", () => {
	// 	expect(post()).toBe();
	// });
});

// GET

// PUT

// PATCH

// DELETE
