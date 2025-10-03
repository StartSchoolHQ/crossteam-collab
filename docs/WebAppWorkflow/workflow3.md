---
title: Code examples
description: "Cross Team Collaboration"
id: webAppWorkflow3
---


## Expanded Version with Code Examples

| Step | Restaurant | Web App | Code Example |
|------|-----------|---------|--------------|
| **1-2** | Customer orders | User clicks button | `<button onclick="addToCart(productId)">Add to Cart</button>` |
| **3** | Waiter writes order | JS captures data | `const data = {productId: 123, quantity: 1, userId: currentUser.id}` |
| **4** | Waiter → Kitchen | Send API request | `fetch('/api/cart/add', {method: 'POST', body: JSON.stringify(data)})` |
| **5** | Order in transit | Network transmission | Request travels via HTTPS with headers and body |
| **6** | Kitchen receives | Server endpoint | `@app.route('/api/cart/add', methods=['POST'])` |
| **7** | Check pantry | Query database | `SELECT * FROM products WHERE id = 123 AND stock > 0` |
| **8** | Found ingredients | Get results | `if product and product.stock > 0:` |
| **9-10** | Cook & prepare | Process logic | Calculate totals, apply business rules, validate user permissions |
| **11** | Update inventory | Update database | `INSERT INTO cart_items (user_id, product_id, quantity) VALUES (?, ?, ?)` |
| **12** | Dish ready | Create response | `return jsonify({'success': True, 'cartTotal': 45.99})` |
| **13** | Return to customer | Response travels back | JSON data returns across network |
| **14-15** | Customer receives & enjoys | Update UI | `document.getElementById('cart-count').textContent = response.itemCount` |

---

## Quick Reference Questions for Students

| Component | Question to Ask |
|-----------|-----------------|
| **Frontend** | "What does the user see right now?" |
| **Event** | "What action triggered this?" |
| **JavaScript** | "What data needs to be collected and sent?" |
| **API** | "Where is this data going? What's the endpoint?" |
| **Server** | "What business rules need to be checked?" |
| **Database** | "What data needs to be read or written?" |
| **Response** | "What information needs to go back to the user?" |
| **UI Update** | "How should the page change to reflect this?" |