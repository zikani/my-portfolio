// Chatbot elements
const chatbot = document.getElementById('chatbot');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input-field');
const chatbotSend = document.getElementById('chatbot-send');
const chatbotScrollButton = document.getElementById('chatbot-scroll-button');

// Open chatbot
function openChatbot() {
    chatbot.style.display = 'block';
    chatbotScrollButton.style.display = 'none'; // Hide scroll button when chatbot is open
    addMessage('bot', 'Hello! How can I assist you today?');
}

// Close chatbot
function closeChatbot() {
    chatbot.style.display = 'none';
    
    chatbotScrollButton.style.display = 'flex'; // Show scroll button when chatbot is closed
}

chatbotClose.addEventListener('click', closeChatbot);

// Toggle chatbot with scroll button
chatbotScrollButton.addEventListener('click', () => {
    if (chatbot.style.display === 'none' || chatbot.style.display === '') {
        openChatbot();
    } else {
        closeChatbot();
    }
});

// Send message
chatbotSend.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message) {
        addMessage('user', message);
        chatbotInput.value = '';
        respondToMessage(message);
    }
}

// Add message to chat
function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chatbot-message', sender);
    messageElement.textContent = message;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Bot response logic
function respondToMessage(message) {
    let response = "I'm just a simple chatbot. How can I assist you?";
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        response = "Hi there! How can I help you?";
    } else if (lowerMessage.includes('project')) {
        response = "Check out my projects section for more details!";
    } else if (lowerMessage.includes('contact')) {
        response = "You can reach me at contact@zmstech.com or call +265992350072.";
    } else if (lowerMessage.includes('skill')) {
        response = "I specialize in web development, JavaScript, React, Node.js, and more!";
    } else if (lowerMessage.includes('resume')) {
        response = "You can download my resume from the homepage.";
    } else if (lowerMessage.includes('thank you')) {
        response = "You're welcome! Let me know if you need anything else.";
    }

    setTimeout(() => {
        addMessage('bot', response);
    }, 1000);
}

// Open chatbot after 9 seconds
setTimeout(openChatbot, 9000);

function respondToMessage(message) {
    let response = "I'm just a simple chatbot. How can I assist you?";
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        response = "Hi there! How can I help you?";
    } else if (lowerMessage.includes('project')) {
        response = "Check out my projects section for more details!";
    } else if (lowerMessage.includes('contact')) {
        response = "You can reach me at contact@zmstech.com or call +265992350072.";
    } else if (lowerMessage.includes('skill')) {
        response = "I specialize in web development, JavaScript, React, Node.js, and more!";
    } else if (lowerMessage.includes('resume')) {
        response = "You can download my resume from the homepage.";
    } else if (lowerMessage.includes('thank you')) {
        response = "You're welcome! Let me know if you need anything else.";
    }

    setTimeout(() => {
        addMessage('bot', response);
    }, 1000);
}

