---
title: "Part 2 | HTML"
description: "Hands-on API practice part 2"
id: api-task-2
---

## Build the HTML

Create `index.html`, use the code below as a starting point, and connect it to the CSS and JavaScript files you have created.  

```html
<!DOCTYPE html>
<html>
<head>
    <title>Random Data Explorer</title>
        <!-- Add your CSS file  -->
</head>
<body>
    <div class="container">
        <h1>Random Data Explorer</h1>
        <p>Click buttons to fetch random data from different APIs!</p>
        
        <div class="buttons">
            <button onclick="getRandomDog()">Random Dog</button>
            <button onclick="getRandomAdvice()">Random Advice</button>
            <button onclick="getRandomUser()">Random User</button>
            <button onclick="getRandomJoke()">Random Joke</button>
        </div>
        
        <div id="loading" class="loading">Loading...</div>
        <div id="result" class="result"></div>
    </div>
    
    <!-- Add your JavaScript file  -->
</body>
</html>
```

---

