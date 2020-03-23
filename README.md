# Chat App 

### NodeJS, VueJS, SocketIO

<br/>

## Node

1. > npm init

   - starts a new Node Application

2. package.json

   - ```json
     "dependencies": {
         "express": "*",
         "socket.io": "*"
     }
     "devDependencies": {
         "nodemon": "*"
     }
     ```

3. > npm install

4. server.js

   - ```javascript
     // import app from "express";
     const app = require("express")();
     // do not need to npm install, it is already in NodeJS
     const http = require("http").Server(app);
     const io = require("socket.io")(http);
     
     const PATH = process.env.PORT || 3000;
     
     http.listen(PATH, () => {
       console.log("Listening on port %s", PATH);
     });
     ```

5. > npm run dev

   - "Listening on port 3000"