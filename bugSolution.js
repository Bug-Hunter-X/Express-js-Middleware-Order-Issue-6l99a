const express = require('express');
const app = express();
const port = 3000;

const myMiddleware = (req, res, next) => {
  console.log('Middleware is running!');
  next();
};

app.use(myMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
// The middleware is correctly placed before the route handler