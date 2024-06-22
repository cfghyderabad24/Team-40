const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());
const { textPrompt, imagePrompt } = require("./geminiAI");

app.post("/textPrompt", async (req, res) => {
  const { promptText } = req.body;
  const text = await textPrompt(promptText);
  data = { text };
  res.json(data);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/imagePrompt", async (req, res) => {
  const { promptText, imagePaths } = req.body;
  const text = await imagePrompt(promptText, ...imagePaths);
  data = { text };
  res.json(data);
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
