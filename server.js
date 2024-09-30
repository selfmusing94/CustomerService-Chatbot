// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const intent = req.body.queryResult.intent.displayName;

    if(intent === 'YourCustomIntent') {
        // Call your custom code or function
        const responseText = yourCustomFunction(req.body);
        
        return res.json({
            fulfillmentText: responseText
        });
    }

    // Default response
    res.json({
        fulfillmentText: "I'm not sure how to help with that."
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Define your custom function
function yourCustomFunction(requestBody) {
    // Extract necessary information from requestBody
    const userMessage = requestBody.queryResult.queryText;
    
    // Implement your chatbot response logic here
    // For example:
    return `You asked: "${userMessage}". Here's a custom response!`;
}
