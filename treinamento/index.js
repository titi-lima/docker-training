const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.redirect("https://www.youtube.com/watch?v=LFZvW0tk4eE");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
