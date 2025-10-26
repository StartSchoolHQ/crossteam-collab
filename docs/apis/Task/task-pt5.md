---
title: "Part 5 | JavaScript"
description: "Hands-on API practice part 5"
id: api-task-5
---

## Add JavaScript  

Create `script.js` and complete the code below, using API endpoints in part 4 to get the necessary data.


```javascript
// Function to show loading state
function showLoading() {
    document.getElementById('loading').classList.add('show');
    document.getElementById('result').classList.remove('show');
}

// Function to hide loading and show result
function showResult(content) {
    document.getElementById('loading').classList.remove('show');
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = content;
    resultDiv.classList.add('show');
}

// Function to show errors
function showError(message) {
    showResult(`
        <h2>Oops! Something went wrong</h2>
        <p>${message}</p>
        <p>Try clicking the button again!</p>
    `);
}

// 1. Random Dog Picture
function getRandomDog() {
    showLoading();
    
    // Write the code fo fetch the dog data
        .then(response => response.json())
        .then(data => {
            showResult(`
                <h2>Random Dog</h2>
                <img src="${data.message}" alt="Random dog">
                <p>Aww! What a cute dog!</p>
            `);
        })
        .catch(error => {
            showError('Could not fetch dog picture. The dogs are sleeping!');
            console.error('Error:', error);
        });
}

// 2. Random Advice
function getRandomAdvice() {
    showLoading();
    
    // Write the code fo fetch the advice data
        .then(response => response.json())
        .then(data => {
            showResult(`
                <h2>Random Advice</h2>
                <p style="font-size: 20px; font-style: italic; text-align: center;">
                    "${data.slip.advice}"
                </p>
                <p style="text-align: center;">Advice #${data.slip.id}</p>
            `);
        })
        .catch(error => {
            showError('Could not fetch advice. Maybe take a break instead?');
            console.error('Error:', error);
        });
}

// 3. Random User
function getRandomUser() {
    showLoading();
    
    // Write the code fo fetch the user data
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            showResult(`
                <h2>Random User</h2>
                <div class="user-card">
                    <img src="${user.picture.large}" alt="${user.name.first}">
                    <div class="user-info">
                        <h3>${user.name.first} ${user.name.last}</h3>
                        <p> ${user.email}</p>
                        <p> ${user.location.city}, ${user.location.country}</p>
                        <p> ${user.phone}</p>
                        <p> Age: ${user.dob.age}</p>
                    </div>
                </div>
            `);
        })
        .catch(error => {
            showError('Could not fetch random user. They are hiding!');
            console.error('Error:', error);
        });
}

// 4. Random Joke
function getRandomJoke() {
    showLoading();
    
    // Write the code fo fetch the joke data
        .then(response => response.json())
        .then(data => {
            showResult(`
                <h2>Random Joke </h2>
                <p style="font-size: 18px; margin-bottom: 15px;">
                    <strong>${data.setup}</strong>
                </p>
                <p style="font-size: 18px; color: #667eea;">
                    ${data.punchline}
                </p>
            `);
        })
        .catch(error => {
            showError('Could not fetch joke. This is no laughing matter!');
            console.error('Error:', error);
        });
}
```

---

## Part 5: Test your explorer 

1. Open `index.html` in your browser
2. Click each button and watch the magic happen!
3. Open DevTools (F12 or right click -> inspect) and go to the Network tab
4. Click buttons again and watch the API requests

**What to observe:**
- See the API requests in the Network tab
- Check the response data
- Notice the JSON structure
- See how fast the APIs respond

---
## Questions to answer

After building this, answer these questions:

1. **What is the structure of each API response?** Open DevTools Network tab and look at the JSON
2. **Which API was fastest?** Check the time in Network tab
3. **What happens if you click a button multiple times quickly?** Why?
4. **Where does the data come from?** Look at the URLs
5. **Could you use these APIs in a real application?** Why or why not?
6. **What would happen if one of these APIs went down?**
7. **How would you handle errors if the API returns an error instead of data?**

