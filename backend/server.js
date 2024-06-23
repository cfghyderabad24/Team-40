const { v4: uuidv4 } = require("uuid");
const { faker } = require("@faker-js/faker");

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Lead = require("./model/lead.js");
const Track = require("./model/track.js");
const Order = require("./model/order.js")

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/leading");
}

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

app.post("/update", async (req, res) => {
  const { notification } = req.body;
  console.log(notification);
  leads = await Lead.find();
  leads = leads.map((lead) => {
    return lead.email;
  });

  const response = await fetch("http://localhost:3002/sendUpdate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      leademails: leads,
      body: notification,
    }),
  });

  res.json({ message: "Notification sent" }, 200);
});

app.get('/track', async (req, res) => {
    try {
      let data = await Track.find({});
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.get('/leads', async (req, res) => {
    try {
      let data = await Lead.find({});
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
