// server/server.js
const WebSocket = require('ws');

// Create WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 }, () => {
  console.log('WebSocket server running on ws://localhost:8080');
});

// Handle connections
wss.on('connection', (ws) => {
  console.log('🟢 New client connected');

  // Send welcome message
  ws.send(JSON.stringify({ type: 'welcome', message: 'Hello from WebSocket server!' }));

  // Listen for messages from client
  ws.on('message', (msg) => {
    console.log('📩 Message from client:', msg.toString());

    // Echo back the message to client
    ws.send(JSON.stringify({ type: 'echo', message: msg.toString() }));
  });

  ws.on('close', () => console.log('🔴 Client disconnected'));
});
