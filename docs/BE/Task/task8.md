---
title: "Task option B | part 2"
description: "Understanding databases"
id: be-task8
---

#### Step 6: Start the backend server
```bash
# In your terminal, run:
node server.js
```

You should see:
```
Server running on http://localhost:3000

Available endpoints:
  GET  /api/products
  GET  /api/products/:id
  POST /api/orders
  GET  /api/orders
```

#### Step 7: Open the frontend
- Open `index.html` in your web browser (double-click the file, or right-click → Open With → Chrome/Firefox)
- You should see the products load
- Try placing an order!

#### Step 8: Watch what happens
- **In the browser**: Open Developer Tools (F12) → Console tab to see frontend logs
- **In the terminal**: Watch the terminal where `server.js` is running to see backend logs

You'll see both sides communicating in real-time!

---

