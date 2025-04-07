// Project name: SimpleGitHubProject
// This is a simple TypeScript project

const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello from TypeScript');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
