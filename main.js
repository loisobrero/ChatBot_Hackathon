const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Define routes for your app (e.g., language learning lessons, chatbot interactions)
app.use('/lessons', require('./routes/lessons')); // Define your lesson routes
app.use('/chatbot', require('./routes/chatbot')); // Define routes for chatbot interactions

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
