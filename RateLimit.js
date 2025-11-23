const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();

// 15 minutes me 100 requests allowed
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100,
  message: "Too many requests, please try again later!",
});

// Sabhi routes par apply kare
app.use(limiter);

app.get("/", (req, res) => {
  res.send("Rate limiting enabled!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
