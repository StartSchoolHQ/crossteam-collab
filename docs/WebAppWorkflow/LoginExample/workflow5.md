---
title: "The Frontend"
description: "Cross Team Collaboration"
id: webAppWorkflow5
---

# Login Example - Step by Step

## The Frontend (What User Sees)
```html
<!DOCTYPE html>
<html>
<head>
    <title>Login Page</title>
    <style>
        .login-form {
            width: 300px;
            padding: 20px;
            border: 1px solid #ccc;
        }
        input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
        }
        button {
            width: 100%;
            padding: 10px;
            background: blue;
            color: white;
        }
    </style>
</head>
<body>
    <div class="login-form">
        <h2>Login</h2>
        <input type="email" id="email" placeholder="Email" />
        <input type="password" id="password" placeholder="Password" />
        <button onclick="handleLogin()">Login</button>
        <div id="message"></div>
    </div>
</body>
</html>
```
### Explanation
```
This is what the user sees in their browser
HTML creates the structure (form, inputs, button)
CSS makes it look nice (colors, spacing, layout)
The button has onclick="handleLogin()" - this is the trigger
```

Discussion Point: "What business requirements are visible in this HTML?"

1. Email and password are required
2. Clear call-to-action button
3. Space for error messages