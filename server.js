// server.js
const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Allow CORS - for development purposes
app.use((req, res, next) => {
  res.header('Content-Security-Policy', "script-src 'self'");
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Endpoint to execute and fetch the shell script output
app.get('/fetchAdaptiveIssuance', (req, res) => {
  exec('bash scripts/adaptive-issuance.sh', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send('Server error');
    }
    res.json({ output: stdout });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
