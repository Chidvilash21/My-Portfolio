// server.js (Cleaned version without Gemini)
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Chat route with simple rule-based replies
app.post('/chat', (req, res) => {
    const userMessage = req.body.message?.toLowerCase() || "";
    let botReply = "I'm just a simple chatbot. How can I help you today?";

    if (userMessage.includes("hello") || userMessage.includes("hi")) {
        botReply = "Hi there! What can I do for you?";
    } else if (userMessage.includes("portfolio")) {
        botReply = "This is Chidvi's portfolio! What would you like to know?";
    } else if (userMessage.includes("name")) {
        botReply = "My name is Chidvilash's Assistant!";
    } else if (userMessage.includes("skills")) {
        botReply = "Chidvilash is skilled in Photography, Web Design, and Photoshop.";
    } else if (userMessage.includes("contact")) {
        botReply = "You can contact Chidvilash at +91 8688865845 or email: chidvipavan2129.cb@gmail.com.";
    } else if (userMessage.includes("photos")) {
        botReply = "Chidvilash is a passionate photographer. Check out the 'Photos' section!";
    } else if (userMessage.includes("resume")) {
        botReply = "You can download Chidvilash's resume from the 'About Me' section.";
    } else if (userMessage.includes("bye")) {
        botReply = "Goodbye! Have a great day!";
    }

    res.json({ reply: botReply });
});

app.listen(port, () => {
    console.log(`✅ Backend server running at http://localhost:${port}`);
    console.log(`📄 Open http://localhost:${port}/index.html to access the chatbot`);
});
