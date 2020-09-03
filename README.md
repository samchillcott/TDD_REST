# TDD & REST Basic

- Using Test-Driven Development (TDD), write a simple front end app that communicates with a placeholder REST API. Original spec below - initial aim was to cover two concepts in one.
- Note: Although TDD was used from the start, issues with the node environment meant the project was completed with only the REST functionality. TDD principles were learned in the process nevertheless. Full explanation in Challenges section.

## Tech Used

- TDD (up to a point).
- Javascript (inc async-await).
- DOM manipulation.
- Jest.js - unit testing.
- RESTful API.
- Axios - Promise based HTTP client for the browser and node.js.
- parcel-bundler - build tool.
- Netlify - hosting.
- DRY principles.

## Features

- Each button uses a different HTTP method to interact with JSON Placeholder and using headers (where required).
- Once async function completes it displays a success message, the REST method used, status code and body (where appropriate).
- POST - create a resource.
- GET - fetch a (single) resource.
- PUT - update a resource (replace the entire resource with given data).
- PATCH - update a resource (only the specified fields).
- DELETE - delete a resource.

## What I Learned

- Test-Driven Development - Understanding and implementing TDD so starting with tests before writing the production code. Red, Green, Refactor and the finer details on the actual process.
- REST - worked with 3rd party APIs before but fist time with RESTful web services.
- Axios - Promise based HTTP client for the browser and node.js. An alternative to fetch API.
- Importing & exporting modules.
- Executive decisions - When to drop a feature/fix (potentially during a sprint) and move on.
- DRY - I am starting to really get the hang of not repeating myself and refactored the 5 original functions into one that took arguments of method, URL, body and headers. I also converted headers to an object to be passed in as to not repeat that either.

## Challenges

- TDD - getting head around a different approach from the start.
  Initially Unsure whether to write all the tests for the one function first then write the function or do the first test, then pass it, then go write the second test (for the first function). After watching a great talk on YT I found it was Add an assertion to test, then fulfil, repeat.I dived straight into the tests after the reading, few yt demos would have helped.
- Modules - Remembering node export/import syntax.
- Unit tests - remembering how to set up (did testing in a project a month or so ago) and what to test for.
- Delete - planned to use it for REST but it is a reserved keyword in JS.
- Environment issues & importing/exporting modules - bringing in variables/libraries to work in both the browser and node/Jest. I could get axios working in the browser but then not in node and vice versa.
  - Fetch undefined - fetch is aJS function so unavailable in node (which is where jest is running the tests. Jest uses Node.js and Node.js does not come with fetch => specific to web browsers so I tried node-fetch then axios.
  - Also tried babel-jest, parcel-bundler, jest-mock-axios and axios-mock-adapter.
  - May need to use mocking in jest.
  - Axios was struggling to be found in the node/jest environment (working fine in browser) and seemed to be something jest were aware of and in the process of fixing.
  - Decided to leave TDD element and continue finishing the basic crude REST app.

## Improvements

- Use React and webpack so imports compile easier (potentially enabling axios to be used in the node environment as well as the browser).
- Possibly use a wrapper object?
- Host on AWS EC2 for further hosting experience.

## Watch Me Build This

- #daysofcode 30/8/20 - 1/9/20.
- [Daily Videos - Instagram](https://www.instagram.com/samchillcott/)

## Original Spec

The following is the specification of the app, yet remember that with TDD you're expected to write tests for it **before** you write any of the actual code. All tests should fail at the beginning, and as you write each function they should all start succeeding one by one as the functionalities are being implemented. By the end, all tests should succeed.

1. Create a basic page with five buttons, one for each REST verb: POST, GET, PUT, PATCH, DELETE
2. Upon clicking a button, perform the appropriate REST action towards the [placeholder REST API:](https://jsonplaceholder.typicode.com/guide.html).
3. Just to solidify that REST knowledge - write a short comment on top of each function explaining what the particular REST verb performs.
4. Use tests to verify that each REST action is executed correctly - compare the response's Status Codes and the payload.
