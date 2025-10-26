---
title: "Part 3 | CSS"
description: "Hands-on API practice part 3"
id: api-task-3
---

## Style it 

Paste the styling below as a starting point in your CSS file.  
Feel free to play with the styling to create your own personal design touch.

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}

h1 {
    color: #333;
    text-align: center;
    margin-bottom: 10px;
}

p {
    text-align: center;
    color: #666;
    margin-bottom: 30px;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin-bottom: 30px;
}

button {
    padding: 15px 25px;
    font-size: 16px;
    border: none;
    border-radius: 10px;
    background: #667eea;
    color: white;
    cursor: pointer;
    transition: all 0.3s;
}

button:hover {
    background: #5568d3;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

button:active {
    transform: translateY(0);
}

.loading {
    display: none;
    text-align: center;
    color: #667eea;
    font-size: 18px;
    margin: 20px 0;
}

.loading.show {
    display: block;
}

.result {
    background: #f8f9fa;
    padding: 30px;
    border-radius: 15px;
    min-height: 200px;
    display: none;
}

.result.show {
    display: block;
}

.result img {
    max-width: 100%;
    border-radius: 10px;
    margin: 20px 0;
}

.result h2 {
    color: #667eea;
    margin-bottom: 15px;
}

.result p {
    color: #333;
    line-height: 1.6;
    text-align: left;
}

.user-card {
    display: flex;
    align-items: center;
    gap: 20px;
}

.user-card img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.user-info h3 {
    margin: 5px 0;
    color: #333;
}

.user-info p {
    margin: 3px 0;
    color: #666;
}
```

---
