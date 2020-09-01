# TDD & REST Basic

- Using Test-Driven Development (TDD), write a simple front end app that communicates with a placeholder REST API. Original spec below - initial aim was to cover two concepts in one.
- Note: Although TDD was used from the start, issues with the node environment meant the project was finished with only the REST functionality. TDD principles were learned in the process nevertheless.

## Tech Used

- TDD (up to a point).
- Javascript (inc async-await).
- DOM manipulation.
- Jest.js - unit testing.
- RESTful API.
- Axios - Promise based HTTP client for the browser and node.js.
- package builder - build tool.
- Netlify - hosting.

## Features

- Each button uses a different HTTP method to interact with JSON Placeholder.

## What I Learned

- Test-Driven Development - Understanding and implementing TDD so starting with tests before writing the production code. Red, Green, Refactor and the finer details on the actual process.
- REST - worked with 3rd party APIs before but fist time with RESTful web services.
- Axios - refactoring from fetch.
- Importing & exporting modules.
- Executive decisions - When to drop a feature/fix (potentially during a sprint) and move on.

## Challenges

## Improvements

## Original Spec

The following is the specification of the app, yet remember that with TDD you're expected to write tests for it **before** you write any of the actual code. All tests should fail at the beginning, and as you write each function they should all start succeeding one by one as the functionalities are being implemented. By the end, all tests should succeed.

1. Create a basic page with five buttons, one for each REST verb: POST, GET, PUT, PATCH, DELETE
2. Upon clicking a button, perform the appropriate REST action towards the placeholder REST API: https://jsonplaceholder.typicode.com/guide.html
3. Just to solidify that REST knowledge - write a short comment on top of each function explaining what the particular REST verb performs.
4. Use tests to verify that each REST action is executed correctly - compare the response's Status Codes and the payload.
