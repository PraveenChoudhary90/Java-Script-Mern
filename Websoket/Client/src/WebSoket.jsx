import React, { useState, useEffect } from 'react';

const WebSocketDemo = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Connect to backend WebSocket
    const ws = new WebSocket('ws://localhost:8080');
    setSocket(ws);

    ws.onopen = () => {
      console.log('✅ Connected to server');
      setMessages((prev) => [...prev, 'Connected to WebSocket server!']);
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prev) => [...prev, `Server: ${data.message}`]);
    };

    ws.onclose = () => setMessages((prev) => [...prev, '❌ Disconnected from server']);
    ws.onerror = (err) => console.error('WebSocket error:', err);

    return () => ws.close();
  }, []);

  const sendMessage = () => {
    if (socket && input.trim()) {
      socket.send(input);
      setMessages((prev) => [...prev, `You: ${input}`]);
      setInput('');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🔗 React WebSocket Example</h2>

      <div style={{ border: '1px solid #ccc', padding: 10, height: 200, overflowY: 'auto' }}>
        {messages.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>

      <div style={{ marginTop: 10 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type message..."
          style={{ padding: 8, width: '70%' }}
        />
        <button onClick={sendMessage} style={{ padding: 8, marginLeft: 10 }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default WebSocketDemo;
