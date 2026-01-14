---
title: "Code | Frontend"
description: "Understanding databases"
id: be-task6
---
### File: `app.js`

**Note**: 
- **Option A (Reading only)**: If you open this in a browser without running the backend, you'll see errors. This is expected.
- **Option B (Running)**: If you followed the setup steps above and started `server.js`, this will work! Open your browser's Developer Tools (F12) → Console tab to see the logs.


Create a file called `app.js` and paste this code:

```javascript
// ========================================
// FILE: app.js
// ========================================
// Frontend JavaScript - Makes API calls to backend
// Feel free to add console.log statements to see what's happening
// ========================================

// API base URL (where our backend server is running)
const API_BASE_URL = 'http://localhost:3000/api';

// Load products when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, initializing...');
    loadProducts();
    setupOrderForm();
});

// ========================================
// LOAD PRODUCTS FROM BACKEND
// ========================================
async function loadProducts() {
    console.log('Loading products from backend...');
    
    try {
        // STEP 1: Frontend makes GET request to backend
        const response = await fetch(`${API_BASE_URL}/products`);
        
        // STEP 2: Frontend receives response from backend
        const data = await response.json();
        
        console.log('Received products:', data);
        
        // STEP 3: Frontend displays the data
        displayProducts(data.products);
    } catch (error) {
        console.error('Error loading products:', error);
        showMessage('Failed to load products', 'error');
    }
}

function displayProducts(products) {
    const container = document.getElementById('products-container');
    
    if (products.length === 0) {
        container.innerHTML = '<p>No products available</p>';
        return;
    }
    
    container.innerHTML = products.map(product => `
        <div class="product">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>Stock: ${product.stock} available</p>
            <p><strong>Product ID: ${product.id}</strong></p>
        </div>
    `).join('');
}

// ========================================
// PLACE ORDER - SEND TO BACKEND
// ========================================
function setupOrderForm() {
    const form = document.getElementById('order-form');
    
    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        // STEP 1: Frontend collects data from form
        const productId = parseInt(document.getElementById('product-id').value);
        const quantity = parseInt(document.getElementById('quantity').value);
        const customerName = document.getElementById('customer-name').value;
        
        // STEP 2: Frontend prepares the data to send
        const orderData = {
            productId: productId,
            quantity: quantity,
            customerName: customerName
        };
        
        console.log('Frontend sending order:', orderData);
        
        try {
            // STEP 3: Frontend makes POST request to backend
            const response = await fetch(`${API_BASE_URL}/orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            });
            
            // STEP 4: Frontend receives response from backend
            const data = await response.json();
            
            console.log('Frontend received response:', data);
            
            // STEP 5: Frontend shows appropriate message
            if (response.ok) {
                showMessage(`Order placed successfully! Order ID: ${data.order.id}, Total: $${data.order.total}`, 'success');
                form.reset();
                loadProducts(); // Reload products to show updated stock
            } else {
                showMessage(`Error: ${data.message}`, 'error');
            }
        } catch (error) {
            console.error('Error placing order:', error);
            showMessage('Failed to place order. Network error.', 'error');
        }
    });
}

function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = `message ${type}`;
    
    // Clear message after 5 seconds
    setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = '';
    }, 5000);
}
```



---

