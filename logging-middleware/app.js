const express = require('express');
const loggingMiddleware = require('./middleware');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(loggingMiddleware);

app.get('/', (req, res) => {
  res.send("Logging Middleware is Active");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
