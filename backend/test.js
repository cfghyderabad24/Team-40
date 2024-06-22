require("dotenv").config(); // Load your updated API keys
const { TwitterApi } = require("twitter-api-v2");

// Create a client using your OAuth 1.0a User Context keys (OAuth 1.0a User Context is compatible with OAuth 2.0 User Context for this use case)
const client = new TwitterApi({
  appKey: process.env.CONSUMER_KEY,
  appSecret: process.env.CONSUMER_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_TOKEN_SECRET,
});

// Define the text of your tweet
const tweetText = "Hello, world! This is my first tweet from Node.js!";

// Make the API call to post the tweet
async function tweet() {
  try {
    const { data: createdTweet } = await client.v2.tweet(tweetText);
    console.log("Tweet created:", createdTweet);
  } catch (error) {
    console.error("Error creating tweet:", error);
  }
}

tweet();
