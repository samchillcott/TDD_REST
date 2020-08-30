const { post } = require("./index");
const get = require("./index");
const put = require("./index");
const patch = require("./index");
const del = require("./index");

// POST

describe("post function", () => {
	test("post function exists", () => {
		expect(post()).toBe(undefined);
	});

	test("post function returns something?", () => {
		expect(post()).toBeTruthy();
	});
});

// GET

// PUT

// PATCH

// DELETE
