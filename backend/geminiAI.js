require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const textPrompt = async (promptText) => {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = promptText;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return text;
};

function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}

const imagePrompt = async (textPrompt, ...imagePaths) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = textPrompt;

  const imageParts = imagePaths.map((path) => {
    return fileToGenerativePart(path, "image/jpeg");
  });

  const result = await model.generateContent(prompt, imageParts);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return text;
};

module.exports = { textPrompt, imagePrompt };
