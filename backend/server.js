const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const users = [
  { email: "test@gmail.com", password: "123456" },
  { email: "user@gmail.com", password: "password" }
];

// Login API
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));