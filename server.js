
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Klase Discord Bot endpoint is online!");
});

app.post("/interactions", (req, res) => {
  const body = req.body;

  if (body.type === 1) {
    return res.json({ type: 1 });
  }

  return res.status(400).json({
    error: "Unsupported interaction"
  });
});

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
