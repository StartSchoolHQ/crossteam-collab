---
title: "Code | HTML"
description: "Understanding databases"
id: be-task4
---

### File: `index.html`

Create a file called `index.html` and paste this code:

```html
<!-- ======================================== -->
<!-- FILE: index.html -->
<!-- ======================================== -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Store</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Simple Store</h1>
    
    <div id="products-container">
        <p>Loading products...</p>
    </div>
    
    <div id="message"></div>
    
    <h2>Place Order</h2>
    <form id="order-form">
        <div>
            <label>Product ID:</label>
            <input type="number" id="product-id" required>
        </div>
        <div>
            <label>Quantity:</label>
            <input type="number" id="quantity" min="1" required>
        </div>
        <div>
            <label>Your Name:</label>
            <input type="text" id="customer-name" required>
        </div>
        <button type="submit">Place Order</button>
    </form>
    
    <script src="app.js"></script>
</body>
</html>
```

**Note**: This links to `style.css` and `app.js` - make sure those files are in the same folder.

---

