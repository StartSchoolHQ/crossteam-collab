---
title: "Database Interaction"
description: "Cross Team Collaboration"
id: webAppWorkflow9
---

```sql
-- Users Table
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sessions Table
CREATE TABLE sessions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    token VARCHAR(255) UNIQUE NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### Sample data
#### USERS TABLE

| id  | email             | password_hash       | created_at          |
|-----|------------------|-------------------|-------------------|
| 1   | alice@example.com | `a1b2c3d4e5f6...` | 2024-01-15 10:30:00 |
| 2   | bob@example.com   | `x9y8z7w6v5u4...` | 2024-02-20 14:15:00 |

#### SESSIONS TABLE

| id  | user_id | token          | expires_at          | created_at          |
|-----|---------|----------------|-------------------|-------------------|
| 1   | 1       | `7f3a9b2c...`  | 2024-10-04 10:30:00 | 2024-10-03 10:30:00 |



```sql
-- Query 1: Find user by email
SELECT id, email, password_hash 
FROM users 
WHERE email = 'alice@example.com';

-- Result:
-- id=1, email='alice@example.com', password_hash='a1b2c3d4e5f6...'


-- Query 2: Create new session
INSERT INTO sessions (user_id, token, expires_at)
VALUES (1, '7f3a9b2c...', '2024-10-04 10:30:00');

-- Result:
-- New session created with id=1
```

DESCRIPTION
```
DATABASE OPERATIONS:

1. SEARCH for user:
   "Find me the user whose email is 'alice@example.com'"
   "Give me their id, email, and password_hash"
   
   Response: Found user with id=1

2. STORE new session:
   "Create a new session record"
   "Link it to user_id=1"
   "Token is '7f3a9b2c...'"
   "Expires tomorrow at 10:30 AM"
   
   Response: Session created successfully
   ```

   Database Concepts:
Primary Key (id):

Unique identifier for each record
Auto-increments (1, 2, 3...)
Used to link tables together

Foreign Key (user_id in sessions):

Links sessions table to users table
"This session belongs to user with id=1"

Indexes:

Email has UNIQUE constraint
Makes searching by email very fast
Prevents duplicate emails