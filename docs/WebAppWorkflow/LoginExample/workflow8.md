---
title: "Backend processing"
description: "Cross Team Collaboration"
id: webAppWorkflow8
---

## Backend Processing

```python
from flask import Flask, request, jsonify
import hashlib
import secrets
from datetime import datetime, timedelta

app = Flask(__name__)

@app.route('/login', methods=['POST'])
def login():
    # Step 1: Get the data sent from frontend
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    # Step 2: Validate again (never trust frontend only!)
    if not email or not password:
        return jsonify({
            'success': False,
            'error': 'Email and password required'
        }), 400
    
    # Step 3: Query database to find user
    user = database.query(
        "SELECT id, email, password_hash FROM users WHERE email = ?",
        (email,)
    )
    
    # Step 4: Check if user exists
    if not user:
        return jsonify({
            'success': False,
            'error': 'Invalid credentials'
        }), 401
    
    # Step 5: Verify password
    # We don't store actual passwords - we store "hashes" (encrypted versions)
    password_hash = hashlib.sha256(password.encode()).hexdigest()
    
    if password_hash != user['password_hash']:
        return jsonify({
            'success': False,
            'error': 'Invalid credentials'
        }), 401
    
    # Step 6: Create session token
    session_token = secrets.token_hex(32)  # Random secure token
    expires_at = datetime.now() + timedelta(days=1)  # Expires in 24 hours
    
    # Step 7: Save session to database
    database.execute(
        "INSERT INTO sessions (user_id, token, expires_at) VALUES (?, ?, ?)",
        (user['id'], session_token, expires_at)
    )
    
    # Step 8: Return success with token
    return jsonify({
        'success': True,
        'sessionToken': session_token,
        'user': {
            'id': user['id'],
            'email': user['email']
        }
    }), 200
    ```
    ### Explanation
    ```
    API ENDPOINT: /login
ACCEPTS: POST requests with email and password
BUSINESS PROCESS:

1. RECEIVE REQUEST
   - Get email and password from request body
   
2. VALIDATE INPUT
   - Check if email and password are provided
   - If not: Return error "Email and password required"
   
3. FIND USER
   - Search database for user with this email
   - If not found: Return error "Invalid credentials"
   
4. VERIFY PASSWORD
   - Compare provided password with stored password hash
   - If doesn't match: Return error "Invalid credentials"
   
   SECURITY NOTE: We never say "email not found" or "wrong password" 
   separately - always "invalid credentials" to prevent hackers from 
   knowing which part is wrong
   
5. CREATE SESSION
   - Generate random secure token (like a temporary key)
   - Set expiration time (24 hours from now)
   
6. SAVE SESSION
   - Store token in database linked to this user
   - This lets us verify future requests
   
7. RETURN SUCCESS
   - Send back: success flag, session token, user info
   - Frontend will save the token and use it for future requests
```

### Key security concepts
#### Password Hashing
```
PLAIN PASSWORD: "mypassword123"  ← Never store this!

HASHED VERSION: "a1b2c3d4e5f6..."  ← Store this instead

How it works:
- Hashing is one-way encryption
- Same password always produces same hash
- But you can't reverse a hash back to the password
- When user logs in, we hash their input and compare hashes
```

#### Session Tokens
```
TOKEN: "7f3a9b2c..."

- Random, unpredictable string
- Stored in database linked to user ID
- Sent back to frontend
- Frontend includes this token in every future request
- Backend checks: "Is this token valid? Has it expired? Which user does it belong to?"
```

