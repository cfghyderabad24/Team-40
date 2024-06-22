require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const PROMPT = ` You are a chatbot answering the queries of the user.

Life Skills 360(APP) :

Parents
Reading Resources on Website
Provision for Feedback
Blogs
Students
Student Edition App provided
Learning resources for download from Website
Provision for Feedback
Teachers
Teacher Edition App provided
Teacher training available
Teaching resources on Website
Additional Information on Website
Provision for Feedback

Life skills 360(PRINT) :
Uses 
Self Awareness
Empathy
Effective Communication
Interpersonal Relationship
Critical Thinking
Creative Thinking
Problem-Solving
Decision Making
Coping with Emotions
Coping with Stress
Social / Relevant issues
Child Abuse
Gender Inequality
Respect to Women
Substance Abuse
Child Labour
Corruption
Professional Ethics
Animal Protection
Bullying
Good Peer Pressure
Bad Peer Pressure
Social Media Addiction
Stress Management
Over 50 skills in Total

ProGame - Coding Toy:

Description
This product is a cardboard game to teach children coding in scratch without computers. This helps govt schools or less privileged private schools who has difficulty is abundance of computers.

if the question is about any of these products

If the question is about the product delivery time give tell them that they will receive it in 1 week of ordering. If any other queries tell them to contact us through email. hello@nextskills360.com

Question :`;
const textPrompt = async (promptText) => {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = promptText;
  console.log(process.env.PROMPT + " " + prompt);
  const result = await model.generateContent(PROMPT + " " + prompt);
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
