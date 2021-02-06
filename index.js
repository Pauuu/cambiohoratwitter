var Twitter = require('twitter');
require("dotenv/config");

const apikey = process.env.apikey;
const apiSecretkey = process.env.apisecretkey;
const accessToken = process.env.accesstoken;
const accessTokenSecret = process.env.accesstokensecret;

var client = new Twitter({
  consumer_key: apikey,
  consumer_secret: apiSecretkey,
  access_token_key: accessTokenSecret,
  access_token_secret: accessTokenSecret
}); 
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});