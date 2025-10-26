---
title: "Part 4 | API calls"
description: "Hands-on API practice part 4"
id: api-task-4a
---

## API endpoints

Below you can find the API endpoints we'll be using to fetch random data.

**What is an API endpoint?**
An API endpoint is a specific URL where you can request data from a server. Think of it as an address where your code can "knock on the door" and ask for information. When you send a request to an endpoint, the server responds with data (usually in JSON format).

**1. Random Dog API:**  
**Endpoint:** `https://dog.ceo/api/breeds/image/random`
- **What it does:** Returns a random dog image URL
- **Response example:**
```json
{
  "message": "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
  "status": "success"
}
```

**2. Advice Slip API:**  
**Endpoint:** `https://api.adviceslip.com/advice`
- **What it does:** Returns random advice
- **Response example:**
```json
{
  "slip": {
    "id": 117,
    "advice": "Always be yourself, unless you can be a unicorn."
  }
}
```

**3. Random User API:**  
**Endpoint:** `https://randomuser.me/api/`
- **What it does:** Generates a random fake user profile
- **Response includes:** name, email, photo, address, phone, etc.

**4. Joke API:**  
**Endpoint:** `https://official-joke-api.appspot.com/random_joke`
- **What it does:** Returns a random joke with setup and punchline
- **Response example:**
```json
{
  "type": "general",
  "setup": "Why don't scientists trust atoms?",
  "punchline": "Because they make up everything!",
  "id": 4
}
```