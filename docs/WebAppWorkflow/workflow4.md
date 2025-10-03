---
title: "Core Workflow Components"
description: "Cross Team Collaboration"
id: webAppWorkflow4
---

## The Request-Response Cycle
```mermaid
sequenceDiagram
    participant B as Browser (Frontend)
    participant A as API
    participant S as Server (Backend)
    participant D as Database

    User->>B: Clicks "Login" button
    B->>A: 1. Sends HTTP Request (/api/login)
    A->>S: 2. Forwards request
    S->>D: 3. Query user data
    D-->>S: 4. Returns user record
    S-->>A: 5. Validates & creates session
    A-->>B: 6. Response (success/failure)
    B-->>User: Shows message (success/error)
