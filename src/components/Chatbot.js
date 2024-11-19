const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

// OpenAI API Key
const OPENAI_API_KEY = 'your_openai_api_key_here'; // Please update here using your api key

// Dialogflow Webhook endpoint
app.post('/webhook', async (req, res) => {
    // Extract the intent name from Dialogflow request
    const intentName = req.body.queryResult.intent.displayName;

    // Check if the intent matches 'Customer Service' and handle page requests
    if (intentName === 'Customer Service') {
        // Extract the page request parameter
        const pageRequest = req.body.queryResult.parameters.page_request.toLowerCase();
        let responseText = '';

        // Map the user's request to appropriate links on your website
        switch (pageRequest) {
            case 'bookings':
                responseText = 'You can book your coffee experience [here](https://yourwebsite.com/bookings).';
                break;
            case 'contact':
                responseText = 'You can reach us through our contact page [here](https://yourwebsite.com/contact).';
                break;
            case 'gallery':
                responseText = 'View our coffee experience gallery [here](https://yourwebsite.com/gallery).';
                break;
            case 'signup':
                responseText = 'Sign up for our latest updates [here](https://yourwebsite.com/signup).';
                break;
            case 'coffee basics':
                responseText = 'Learn the basics of coffee [here](https://yourwebsite.com/coffee-basics).';
                break;
            default:
                // If none of the specific requests match, call OpenAI API for general conversation
                const userQuery = req.body.queryResult.queryText;
                return handleGeneralInquiry(userQuery, res);
        }

        // Send the appropriate response back to Dialogflow for specific links
        return res.json({
            fulfillmentText: responseText
        });
    } else {
        // For other intents or queries, use OpenAI to handle
        const userQuery = req.body.queryResult.queryText;
        return handleGeneralInquiry(userQuery, res);
    }
});

// Function to handle general inquiries with OpenAI API, including the coffee shop scenario
async function handleGeneralInquiry(query, res) {
    // Define the role of the AI as a coffee expert
    const aiRoleDescription = "You are a coffee expert at CoffeeTheRoast coffee shop. You chat with customers, ask about their preferred taste, recommend coffee accordingly, encourage them to book an experience session or buy coffee.";
    try {
        const openAiResponse = await axios.post('https://api.openai.com/v1/completions', {
            model: "text-davinci-003",
            prompt: `${aiRoleDescription}\n\nCustomer says: "${query}"\nCoffee Expert:`,
            max_tokens: 150,
            temperature: 0.9
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            }
        });

        // Get the AI-generated response text from OpenAI's response
        const aiResponse = openAiResponse.data.choices[0].text.trim();

        // Send the AI response back as the fulfillment text
        return res.json({
            fulfillmentText: aiResponse
        });
    } catch (error) {
        console.error("Error calling OpenAI API:", error);
        return res.json({
            fulfillmentText: "Sorry, I couldn't process your request right now. Please try later"
        });
    }
}

// Start the server and listen on a specific port (e.g., 3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});