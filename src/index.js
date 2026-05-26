const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', version: '1.0.0' }));
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from my-devops-app!\n');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = server; // for testing