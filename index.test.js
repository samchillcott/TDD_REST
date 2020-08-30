const { post } = require("./index");
const get = require("./index");
const put = require("./index");
const patch = require("./index");
const del = require("./index");

// POST

describe("post function", () => {
	it("should exist", () => {
		expect(post()).toBe(undefined);
	});

	it("should return something?", () => {
		expect(post()).toBeTruthy();
	});
});

// GET

// PUT

// PATCH

// DELETE
