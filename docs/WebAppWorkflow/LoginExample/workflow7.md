---
title: "The API Call"
description: "Cross Team Collaboration"
id: webAppWorkflow7
---

## The API Call (The Bridge)
```js
function loginUser(email, password) {
    // fetch() is the built-in JavaScript way to make HTTP requests
    fetch('https://api.yourapp.com/login', {
        method: 'POST',              // POST = sending data to server
        headers: {
            'Content-Type': 'application/json'  // We're sending JSON format
        },
        body: JSON.stringify({       // Convert to JSON string
            email: email,
            password: password
        })
    })
    .then(response => response.json())  // Convert response to JSON
    .then(data => {
        // Server responded! Now handle the result
        if (data.success) {
            // Login successful!
            document.getElementById('message').innerHTML = 
                '<p style="color: green;">Login successful!</p>';
            
            // Save the session token for future requests
            localStorage.setItem('sessionToken', data.sessionToken);
            
            // Redirect to dashboard after 1 second
            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 1000);
        } else {
            // Login failed
            document.getElementById('message').innerHTML = 
                '<p style="color: red;">' + data.error + '</p>';
        }
    })
    .catch(error => {
        // Network error or server is down
        document.getElementById('message').innerHTML = 
            '<p style="color: red;">Connection error. Please try again.</p>';
        console.error('Error:', error);
    });
}
```
### Explanation
```
FUNCTION: loginUser
RECEIVES: email, password
DOES:
  1. Package email and password into JSON format:
     {"email": "user@example.com", "password": "secret123"}
  
  2. Send HTTP POST request to: https://api.yourapp.com/login
     (POST means we're sending data, not just asking for data)
  
  3. Wait for server response...
  
  4. When response arrives:
     IF login was successful:
       - Show success message
       - Save the session token (like a temporary key)
       - Redirect user to dashboard
     
     IF login failed:
       - Show error message from server
  
  5. IF network problem occurs:
     - Show connection error message
```

### Key Concepts to Explain:
#### What is JSON?
```js
// JSON is just a way to organize data that both JavaScript and servers understand
{
    "email": "user@example.com",
    "password": "secret123"
}

// It's like a labeled box:
// - "email" label contains "user@example.com"
// - "password" label contains "secret123"
```

#### What is a Session Token?
"After you log in successfully, the server gives you a 'session token' - think of it like a temporary VIP pass. You show this pass with every request you make, so the server knows you're logged in. It expires after some time (like a day pass to a theme park)."
Discussion Exercise (5 minutes):
Show students browser Developer Tools:

1. Open Chrome DevTools (F12)
2. Go to Network tab
3. Show a real login request
4. Point out: Request URL, Method (POST), Request Body, Response