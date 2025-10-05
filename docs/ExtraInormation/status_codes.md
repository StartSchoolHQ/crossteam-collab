---
title: "Status Codes Cheat Sheet"
description: "Cross Team Collaboration"
id: status_codes
---


### Business Translation:
4xx errors: Check your requirements, the request has a problem  
5xx errors: Server/infrastructure issue, contact DevOps/backend team

```
2xx - SUCCESS
200 OK                  - Request succeeded
201 Created             - New resource created successfully
204 No Content          - Success but no data to return

3xx - REDIRECTION
301 Moved Permanently   - Resource moved to new URL
302 Found               - Temporary redirect

4xx - CLIENT ERROR (Your Fault)
400 Bad Request         - Invalid data sent
401 Unauthorized        - Not logged in or invalid token
403 Forbidden           - Logged in but not allowed
404 Not Found           - Resource doesn't exist
422 Unprocessable       - Data format valid but business logic rejects it

5xx - SERVER ERROR (Their Fault)
500 Internal Server Error - Something broke on server
502 Bad Gateway          - Server got invalid response from another server
503 Service Unavailable  - Server temporarily down
```

