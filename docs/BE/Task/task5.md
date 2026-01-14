---
title: "Code | CSS"
description: "Understanding databases"
id: be-task5
---

### File: `style.css`

Create a file called `style.css` and paste this code:

```css
/* ======================================== */
/* FILE: style.css */
/* ======================================== */
/* Frontend styling - feel free to modify colors, spacing, etc. */

body {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f5f5f5;
}

h1 {
    color: #333;
    border-bottom: 3px solid #007bff;
    padding-bottom: 10px;
}

h2 {
    color: #555;
    margin-top: 30px;
}

/* Product display styling */
.product {
    background-color: white;
    border: 1px solid #ddd;
    padding: 15px;
    margin: 10px 0;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.product h3 {
    color: #007bff;
    margin-top: 0;
}

.product p {
    margin: 5px 0;
    color: #666;
}

/* Button styling */
button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
}

button:hover {
    background-color: #0056b3;
}

/* Message styling */
.message {
    padding: 15px;
    margin: 15px 0;
    border-radius: 4px;
    font-weight: bold;
}

.success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}

.error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
}

/* Form styling */
form {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

form div {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    color: #555;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    box-sizing: border-box;
}

input:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0,123,255,0.3);
}

/* Loading state */
#products-container p {
    text-align: center;
    color: #999;
    font-style: italic;
}
```

**Note**: Feel free to change colors, sizes, or add your own styles. This is just a starting point.

---

