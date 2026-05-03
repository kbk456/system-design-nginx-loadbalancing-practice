const express = require('express');
const app = express();
const serverName = process.env.SERVER_NAME || 'backend';

app.get('/', (req, res) => {
  res.json({
    server: serverName,
    message: `Hello from ${serverName}`,
  });
});

app.listen(3000, () => {
  console.log(`${serverName} running on port 3000`);
});
