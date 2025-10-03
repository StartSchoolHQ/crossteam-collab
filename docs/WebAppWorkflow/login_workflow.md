---
title: "Intro to webb app workflow"
description: "Cross Team Collaboration"
id: webAppWorkflow_login
---

# Login Example - Step by Step

# Login Example - Step by Step

This walkthrough shows how a **Login workflow** moves through the entire web application stack: **Frontend → API → Backend → Database → Response**.

---

## Step 1: The Frontend (What User Sees)

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

- This is what the user sees in their browser  
- **HTML** creates the structure (form, inputs, button)  
- **CSS** makes it look nice (colors, spacing, layout)  
- The button has `onclick="handleLogin()"` - this is the trigger  

**Business requirements visible in this HTML:**  
- Email and password are required  
- Clear call-to-action button  
- Space for error messages  

---

## Step 2: Frontend JavaScript (Processing & API Call)

```javascript
function handleLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        document.getElementById("message").innerText = "Please fill all fields";
        return;
    }

    callLoginAPI(email, password);
}

function callLoginAPI(email, password) {
    fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => handleLoginResponse(data));
}

function handleLoginResponse(data) {
    if (data.success) {
        document.getElementById("message").innerText = "Login successful!";
    } else {
        document.getElementById("message").innerText = "Invalid credentials";
    }
}
```

### Explanation

- **Validation**: Checks if fields are filled  
- **API Call**: Sends login request as JSON to backend (`/api/login`)  
- **UI Update**: Displays success/failure message  

---

## Step 3: Backend Processing (Business Logic)

```python
def login_user(email, password):
    # Find user in database
    user = database.find_user(email)
    
    # Check password
    if user and check_password(password, user.password_hash):
        # Create session
        session = create_user_session(user.id)
        return {"success": True, "session_token": session.token}
    else:
        return {"success": False, "error": "Invalid credentials"}
```

### Explanation

- Looks up user in DB  
- Validates password using hashing function  
- If valid → creates a **session token**  
- Returns structured JSON response  

---

## Step 4: Database Query

```sql
SELECT id, email, password_hash 
FROM users 
WHERE email = 'user@example.com';
```

### Explanation

- Database searches for the user by email  
- Returns user record (id, email, password hash)  
- Backend compares password with stored hash  

---

## Step 5: Response Back to User

- Database returns user data → Backend verifies and creates session  
- Backend sends JSON response to API layer  
- API sends it back to the browser  
- Browser JavaScript updates the UI message  

### Example JSON Response

```json
{
  "success": true,
  "session_token": "abc123xyz456"
}
```

If login fails:  

```json
{
  "success": false,
  "error": "Invalid credentials"
}
```

---

# Key Takeaways

1. Every **click** triggers a chain of processes across multiple layers  
2. Frontend, API, Backend, and Database **work together** to complete the task  
3. Each layer has **failure points** that must be handled properly  
4. Clear **requirements** (e.g. login fields, error messages, session handling) are visible at every stage  

---
