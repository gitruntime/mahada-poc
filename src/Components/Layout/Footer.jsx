import React, { useState } from 'react';

const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm the Mhada Estate Help Bot. How can I assist you today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');

  // Basic chatbot responses
  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! How can I help you with Mhada Estate today?";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
      return "You can reach us through our Help Center or Sales Enquiry links in the footer. We're here to help!";
    } else if (lowerMessage.includes('property') || lowerMessage.includes('buy')) {
      return "We connect property buyers and sellers. Browse our listings or contact our sales team for personalized assistance.";
    } else if (lowerMessage.includes('app')) {
      return "You can download our app from Google Play Store or Apple App Store. Links are available in the footer!";
    } else if (lowerMessage.includes('privacy') || lowerMessage.includes('terms')) {
      return "You can find our Privacy Policy and Terms & Conditions in the footer links section.";
    } else if (lowerMessage.includes('career') || lowerMessage.includes('job')) {
      return "Interested in joining our team? Check out the Careers link in our footer for current opportunities.";
    } else if (lowerMessage.includes('thank')) {
      return "You're welcome! Feel free to ask if you need anything else.";
    } else if (lowerMessage.includes('bye')) {
      return "Goodbye! Have a great day. Feel free to come back if you need help!";
    } else {
      return "I'm here to help! You can ask me about our properties, contact information, app downloads, or general inquiries. What would you like to know?";
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add user message
    const newMessages = [...messages, { text: inputValue, sender: 'user' }];
    setMessages(newMessages);

    // Get bot response after a short delay
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      setMessages([...newMessages, { text: botResponse, sender: 'bot' }]);
    }, 500);

    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <footer className="font-['Montserrat'] text-white">

      {/* 1️⃣ ABOUT SECTION */}
      <div className="w-full bg-[#383838] py-10">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            About Mhada Estate
          </h2>
          <p className="text-sm font-light mb-8">
            As the largest platform connecting property buyers and sellers, ...
          </p>

          {/* App + Social */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex gap-3">
              <img src="googleplay.png" alt="Google Play" className="h-[32px]" />
              <img src="appstore1.png" alt="App Store" className="h-[32px]" />
            </div>

            <div className="flex gap-2">
              <img src="facebook_logo.png" alt="Facebook" className="w-[32px] h-[32px]" />
              <img src="x-icon.png" alt="X" className="w-[32px] h-[32px]" />
              <img src="linkedin-icon.png" alt="LinkedIn" className="w-[32px] h-[32px]" />
              <img src="youtube-icon.png" alt="YouTube" className="w-[32px] h-[32px]" />
              <img src="instagram-icon.png" alt="Instagram" className="w-[32px] h-[32px]" />
            </div>
          </div>
        </div>
      </div>

      {/* 2️⃣ NAVIGATION LINKS */}
      <div className="w-full bg-[#515151] py-5 border-y border-gray-600 border-dashed">
        <ul className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-3 text-[14px] text-white px-4">
          {[
            'Sitemap', 'Terms & Conditions', 'Privacy Policy', 'Whistle Blower Policy',
            'Blog', 'Careers', 'Testimonials', 'Unsubscribe',
            'Help Center', 'Sales Enquiry', 'Buy Services', 
          ].map(link => (
            <li key={link} className="hover:text-white cursor-pointer">
              {link}
            </li>
          ))}
        </ul>
      </div>

      {/* 3️⃣ DISCLAIMER */}
      <div className="w-full bg-[#262626] py-6">
        <p className="text-[12px] mx-auto text-start max-w-[1200px] px-4 text-[11px] text-white leading-relaxed">
          Disclaimer: Magicbricks Realty Services Limited is only an intermediary offering its platform to advertise properties of Seller for a Customer/Buyer/User coming on its Website and is not and cannot be a
          party to or privy to or control in any manner any transactions between the Seller and the Customer/Buyer/User. All the offers and discounts on this Website have been extended by<span className="underline cursor-pointer text-[#606060]"> Read more</span>
        </p>
      </div>

      {/* 4️⃣ COPYRIGHT  */}
      <div className="w-full h-[40px] bg-[#000000] py-4 text-center">
        <p className="text-[10px] text-white">
          All trademarks, logos and names are properties of their respective owners. All Rights Reserved. © Copyright 2025 Mhada Estate.
        </p>
      </div>

      {/* CHATBOT BUTTON */}
      <div 
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 
                  flex items-center bg-[#f17128] 
                  border-2 border-white text-white 
                  p-2.5 md:px-5 md:py-2.5 
                  rounded-full shadow-lg 
                  cursor-pointer hover:scale-105 transition-transform z-50">
        <img src="/chatbox.png" alt="Chat" className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
        <span className="hidden md:block font-bold text-sm ml-2">
          Help Bot
        </span>
      </div>

      {/* CHATBOT WINDOW */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-4 md:bottom-24 md:right-6 w-[340px] md:w-[380px] h-[500px] 
                        bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-gray-200">
          
          {/* Chat Header */}
          <div className="bg-[#f17128] text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src="/chatbox.png" alt="Chat" className="w-[24px] h-[24px]" />
              <h3 className="font-bold text-lg">Help Bot</h3>
            </div>
            <button 
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:bg-white hover:text-[#f17128] rounded-full w-8 h-8 flex items-center justify-center transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`mb-3 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[75%] p-3 rounded-lg ${
                    message.sender === 'user' 
                      ? 'bg-[#f17128] text-white rounded-br-none' 
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#f17128] text-gray-800"
              />
              <button
                onClick={handleSendMessage}
                className="bg-[#f17128] text-white px-6 py-2 rounded-full hover:bg-[#d96320] transition-colors font-semibold"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};

export default Footer;