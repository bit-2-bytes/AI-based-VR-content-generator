// Import required modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemon = require('nodemon');
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

// Create an instance of Express
const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: [process.env.origin],
}));

const configuration = new Configuration({
    apiKey: process.env.api_key,
});

const openai = new OpenAIApi(configuration);

// Define a route handler for the GET request
app.post('/ask-question', async (req, res) => {
    try {
        const completion = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: req.body.value,
          max_tokens: 3500,
        });
        res.send(completion.data.choices[0].text);
      } catch (error) {
        if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
      }
      
});

// Start the server
const server = app.listen(process.env.port, () => {
    console.log('Server is running on port 4000');
});

// Set up Nodemon to automatically restart the server
nodemon({
    script: 'index.js', // File to monitor for changes
    ignore: ['node_modules/'] // Ignore changes in the "node_modules" directory
}).on('restart', () => {
    console.log('Server restarted due to changes');
});
