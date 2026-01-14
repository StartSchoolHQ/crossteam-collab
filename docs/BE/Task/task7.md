---
title: "Code | Backend"
description: "Understanding databases"
id: be-task7
---
### File: `server.js`
**Note**: 
- **Option A (Reading Ooly)**: You're just reading this to understand the backend logic.
- **Option B (Running)**: After running `node server.js` in your terminal, this server will start and you'll see logs in the terminal as requests come in.



Create a file called `server.js` and paste this code:

```javascript
// ========================================
// FILE: server.js
// ========================================
// Backend - Express server with mock database
// This is where all the "real work" happens
// ========================================

// Import Express framework
const express = require('express');
const cors = require('cors');

// Create an Express application
const app = express();

// Middleware
app.use(cors()); // Allow frontend to make requests from different port
app.use(express.json()); // Parse JSON request bodies

// Define the port where server will listen
const PORT = 3000;

// ========================================
// MOCK DATABASE
// ========================================
// In a real app, this would be PostgreSQL, MongoDB, etc.
// Here we use JavaScript objects to demonstrate concepts
// Feel free to add more products or change the data!

let products = [
    { id: 1, name: 'Laptop', price: 999, stock: 5 },
    { id: 2, name: 'Mouse', price: 25, stock: 50 },
    { id: 3, name: 'Keyboard', price: 75, stock: 30 }
];

let orders = [];
let nextOrderId = 1;

// ========================================
// DATABASE FUNCTIONS
// ========================================
// These simulate database queries
// In a real app, these would be SQL queries or MongoDB operations

function getAllProducts() {
    return products;
}

function getProductById(id) {
    return products.find(product => product.id === id);
}

function createOrder(orderData) {
    const newOrder = {
        id: nextOrderId++,
        ...orderData,
        createdAt: new Date()
    };
    orders.push(newOrder);
    return newOrder;
}

function updateProductStock(productId, newStock) {
    const product = products.find(p => p.id === productId);
    if (product) {
        product.stock = newStock;
        return true;
    }
    return false;
}

function getAllOrders() {
    return orders;
}

// ========================================
// API ENDPOINTS
// ========================================
// These are the URLs that the frontend can call

// GET /api/products
// Retrieves all products
app.get('/api/products', (req, res) => {
    console.log('Backend received: GET /api/products');
    
    // Step 1: Get data from database
    const allProducts = getAllProducts();
    
    console.log('Backend sending:', allProducts);
    
    // Step 2: Send response
    res.json({
        success: true,
        products: allProducts
    });
});

// GET /api/products/:id
// Retrieves a specific product
app.get('/api/products/:id', (req, res) => {
    console.log(`Backend received: GET /api/products/${req.params.id}`);
    
    // Step 1: Extract ID from URL
    const productId = parseInt(req.params.id);
    
    // Step 2: Query database
    const product = getProductById(productId);
    
    // Step 3: Check if product exists
    if (!product) {
        console.log('Backend sending: 404 Product not found');
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        });
    }
    
    console.log('Backend sending:', product);
    
    // Step 4: Send response
    res.json({
        success: true,
        product: product
    });
});

// POST /api/orders
// Creates a new order
// This is the most complex endpoint - it does a lot!
app.post('/api/orders', (req, res) => {
    console.log('Backend received: POST /api/orders');
    console.log('Request body:', req.body);
    
    // Step 1: Extract data from request
    const { productId, quantity, customerName } = req.body;
    
    // Step 2: Validation - check all required fields
    if (!productId || !quantity || !customerName) {
        console.log('Backend sending: 400 Missing required fields');
        return res.status(400).json({
            success: false,
            message: 'Missing required fields'
        });
    }
    
    // Step 3: Check if product exists and has stock
    const product = getProductById(productId);
    
    if (!product) {
        console.log('Backend sending: 404 Product not found');
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        });
    }
    
    if (product.stock < quantity) {
        console.log(`Backend sending: 400 Not enough stock (available: ${product.stock})`);
        return res.status(400).json({
            success: false,
            message: `Not enough stock. Available: ${product.stock}`
        });
    }
    
    // Step 4: Calculate total
    const total = product.price * quantity;
    console.log(`Calculating total: ${product.price} × ${quantity} = ${total}`);
    
    // Step 5: Create order in database
    const newOrder = createOrder({
        productId,
        productName: product.name,
        quantity,
        customerName,
        total
    });
    console.log('Created order in database:', newOrder);
    
    // Step 6: Update product stock
    const oldStock = product.stock;
    const newStock = product.stock - quantity;
    updateProductStock(productId, newStock);
    console.log(`Updated stock: ${oldStock} → ${newStock}`);
    
    // Step 7: Send success response
    console.log('Backend sending: 201 Order created successfully');
    res.status(201).json({
        success: true,
        message: 'Order created successfully',
        order: newOrder
    });
});

// GET /api/orders
// Retrieves all orders (for inspection)
app.get('/api/orders', (req, res) => {
    console.log('Backend received: GET /api/orders');
    
    const allOrders = getAllOrders();
    
    console.log('Backend sending:', allOrders);
    
    res.json({
        success: true,
        orders: allOrders
    });
});

// ========================================
// START SERVER
// ========================================

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('\nAvailable endpoints:');
    console.log('  GET  /api/products');
    console.log('  GET  /api/products/:id');
    console.log('  POST /api/orders');
    console.log('  GET  /api/orders');
    console.log('\nWatch this console to see what happens when requests come in!');
});
```

---


