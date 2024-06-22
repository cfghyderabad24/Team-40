require('dotenv').config();
const { TwitterApi } = require('twitter-api-v2');

// Your Twitter API credentials
const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_KEY_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

// Function to post a tweet
async function postTweet() {
  try {
    const tweet = await client.v2.tweet('Hello Twitter!, posting 2nd time from Node.js');
    console.log('Tweet posted successfully:', tweet);
  } catch (error) {
    console.error('Error posting tweet:', error);
  }
}

postTweet();
