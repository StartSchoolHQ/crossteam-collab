---
title: "Task option B | part 3"
description: "Understanding databases"
id: be-task9
---

## Your Task - Trace three scenarios

Now trace the complete flow for each scenario below.

### Scenario 1: Successful order

**Initial database state:**

The products array contains three items:
- Product 1: Laptop with price 999 and stock 5
- Product 2: Mouse with price 25 and stock 50
- Product 3: Keyboard with price 75 and stock 30

The orders array is empty.

**User action:**
- User enters Product ID: 1
- User enters Quantity: 2
- User enters Name: John Doe
- User clicks Place Order button

**Your task:**
- Show what app.js sends to server.js
- Show all backend processing steps in server.js
- Show what database operations happen (read, write, update)
- Show what response server.js sends back
- Show what app.js does with the response
- Show what user sees in index.html
- Show the final database state in server.js
- Explain what changed and why

---

### Scenario 2: insufficient stock

**Initial database state:**

The products array contains one item:
- Product 2: Mouse with price 25 and stock 3

The orders array is empty.

**User action:**
- User enters Product ID: 2
- User enters Quantity: 5
- User enters Name: Jane Smith
- User clicks Place Order button

**Your task:**
- Show what app.js sends
- Show backend processing in server.js until error is detected
- Show what database operations happen (if any)
- Show what error response server.js sends back
- Show what app.js does with the error
- Show what user sees in index.html
- Show the final database state in server.js
- Explain why nothing changed (or what did change)

---

### Scenario 3: Product does not exist

**Initial satabase state:**

The products array contains one item:
- Product 1: Laptop with price 999 and stock 5

The orders array is empty.

**User action:**
- User enters Product ID: 99
- User enters Quantity: 1
- User enters Name: Bob Johnson
- User clicks Place Order button

**Your task:**
- Show what app.js sends
- Show backend processing in server.js until error is detected
- Show what database operations happen (if any)
- Show what error response server.js sends back
- Show what app.js does with the error
- Show what user sees in index.html
- Show the final database state in server.js
- Explain at which step the backend caught the problem

---
