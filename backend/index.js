const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
app.use(cors({ origin: "https://info.suhaskalagotla.in" }));

app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "This is fake data from server don't believe it!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
