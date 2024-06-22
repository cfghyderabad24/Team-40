require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const run = async () => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = "Hi today is my birtday";

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
};

// send email api test

const sendMail = () => {
  const response = fetch("http://localhost:3002/sendMail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      toEmail: "gvarshithreddy8@gmail.com",
      subject: "Test Email",
      body: "This is a test email",
    }),
  });
};

const askQuery = () => {
  const response = fetch("http://localhost:3001/textPrompt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      promptText: "What is use of ProGame",
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data.text));
};

const sendUpdate = async () => {
  const response = await fetch("http://localhost:3001/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      notification: "This is a test notification",
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

sendUpdate();
