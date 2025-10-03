---
title: "CRUD operations"
description: "Cross Team Collaboration"
id: webAppWorkflow11
---

## What is CRUD
```
C - CREATE   (Make new data)
R - READ     (Get existing data)
U - UPDATE   (Change existing data)
D - DELETE   (Remove data)
```
## Business examples
### USERS TABLE

| id  | email             | password_hash       | created_at          |
|-----|------------------|-------------------|-------------------|
| 1   | alice@example.com | `a1b2c3d4e5f6...` | 2024-01-15 10:30:00 |
| 2   | bob@example.com   | `x9y8z7w6v5u4...` | 2024-02-20 14:15:00 |

### SESSIONS TABLE

| id  | user_id | token          | expires_at          | created_at          |
|-----|---------|----------------|-------------------|-------------------|
| 1   | 1       | `7f3a9b2c...`  | 2024-10-04 10:30:00 | 2024-10-03 10:30:00 |
