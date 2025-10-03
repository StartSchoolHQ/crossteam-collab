---
title: "Capturing User Action"
description: "Cross Team Collaboration"
id: webAppWorkflow6
---

## Frontend JavaScript (Capturing User Action)

```js
function handleLogin() {
    // Step 1: Get what the user typed
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageBox = document.getElementById('message');
    
    // Step 2: Validate before sending
    if (!email || !password) {
        messageBox.innerHTML = '<p style="color: red;">Please fill all fields</p>';
        return; // Stop here, don't continue
    }
    
    if (!email.includes('@')) {
        messageBox.innerHTML = '<p style="color: red;">Invalid email format</p>';
        return;
    }
    
    // Step 3: Show loading state
    messageBox.innerHTML = '<p>Logging in...</p>';
    
    // Step 4: Call the API
    loginUser(email, password);
}
```
### Explanation
```
FUNCTION: handleLogin
WHEN: User clicks the login button
DO:
  1. Grab the email and password from the input fields
  2. Check if both fields are filled in
     - If not: Show error "Please fill all fields" and STOP
  3. Check if email has @ symbol
     - If not: Show error "Invalid email format" and STOP
  4. Show "Logging in..." message
  5. Send email and password to the server
```

  
Business Rules Visible:

Email validation (must contain @)
Required fields checking
User feedback during process

Speaker Notes:
"Notice how we check things BEFORE sending to the server. This is called 'client-side validation' - it's faster and saves unnecessary server requests. But we'll also check again on the server for security!"