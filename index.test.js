const { post } = require("./index");
const { get } = require("./index");
const { put } = require("./index");
const { patch } = require("./index");
const { del } = require("./index");

// POST

describe("post function", () => {
	it("should exist", () => {
		expect(post()).not.toBe(null);
	});

	it("should return an object", () => {
		expect(post()).toStrictEqual({});
	});
	it("should return an object with status code 200/ok", () => {
		expect(post()).toBe();
	});
	it("should return an object with a payload", () => {
		expect(post()).toBe();
	});
});

// GET

// PUT

// PATCH

// DELETE
