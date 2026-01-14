---
title: "Task option A | part 2"
description: "Understanding databases"
id: be-task10
---
## Answer these questions

### Understanding file structure

**Question 1**: what does each file do?
- index.html: 
- style.css: 
- app.js: 
- server.js: 

**Question 2**: which files run in the browser?

**Question 3**: which file runs on the server?

### Understanding frontend-backend communication

**Question 4**: why can't the frontend access the database directly? what security problems would this create?

**Question 5**: what data does app.js send to server.js when placing an order?

**Question 6**: what does server.js send back? compare a successful response to an error response.

### Understanding validation

**Question 7**: find the line in server.js where it checks if there's enough stock. what is the line number?

**Question 8**: why does validation happen in server.js instead of app.js? the HTML form already has validation - why isn't that enough?

**Question 9**: list all the checks that happen in the POST /api/orders endpoint.

### Understanding database operations

**Question 10**: in scenario 1 (successful order), what happens to the data? what gets read? what gets added? what gets updated?

**Question 11**: in scenario 2 (insufficient stock), does the database change? why or why not?

**Question 12**: what if two customers order the last laptop at the exact same time? what problem could happen? how would a real database prevent this?

### Understanding HTTP

**Question 13**: what HTTP methods are used? what do GET and POST do?

**Question 14**: what HTTP status codes appear in server.js? what does each one mean (200, 201, 400, 404)?

**Question 15**: compare success and error responses. what fields does each have? why doesn't the error response include an order object?

### Understanding styling

**Question 16**: what would happen if you deleted the link to style.css from index.html?

**Question 17**: what colors are used for success and error messages? why different colors?

### Real-world considerations

**Question 18**: what's wrong with storing data in JavaScript arrays? list at least 3 problems.

**Question 19**: how would this work with a real database like PostgreSQL? what would replace the arrays and the find() and push() operations?

**Question 20**: what happens if the network is slow? if placing an order takes 30 seconds, what does the user see?

---