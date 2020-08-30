# TDD & REST Basic

Using Test-Driven Development (TDD), write a simple front end app that communicates with a placeholder REST API.

## Original Spec

The following is the specification of the app, yet remember that with TDD you're expected to write tests for it **before** you write any of the actual code. All tests should fail at the beginning, and as you write each function they should all start succeeding one by one as the functionalities are being implemented. By the end, all tests should succeed.

1. Create a basic page with five buttons, one for each REST verb: POST, GET, PUT, PATCH, DELETE
2. Upon clicking a button, perform the appropriate REST action towards the placeholder REST API: https://jsonplaceholder.typicode.com/guide.html
3. Just to solidify that REST knowledge - write a short comment on top of each function explaining what the particular REST verb performs.
4. Use tests to verify that each REST action is executed correctly - compare the response's Status Codes and the payload.
