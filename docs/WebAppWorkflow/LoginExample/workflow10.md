---
title: "Complete structure"
description: "Cross Team Collaboration"
id: webAppWorkflow10
---

```
TIME →

0ms:   User clicks "Login" button
       ↓
10ms:  JavaScript validates email/password format
       ↓
15ms:  JavaScript packages data into JSON
       ↓
20ms:  Browser sends HTTP POST to https://api.yourapp.com/login
       ↓
150ms: Request travels across internet to server
       ↓
160ms: Server receives request
       ↓
165ms: Server validates data again
       ↓
170ms: Server queries database for user
       ↓
180ms: Database returns user record
       ↓
185ms: Server checks password hash
       ↓
190ms: Server generates session token
       ↓
195ms: Server saves session to database
       ↓
205ms: Server sends success response
       ↓
355ms: Response travels back across internet
       ↓
365ms: Browser receives response
       ↓
370ms: JavaScript processes response
       ↓
375ms: JavaScript shows success message
       ↓
380ms: JavaScript saves session token
       ↓
1380ms: Page redirects to dashboard
```