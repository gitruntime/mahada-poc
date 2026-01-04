"use client";
import React, { useState } from "react";

const Footer = () => {
  const [openBot, setOpenBot] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const getBotReply = (text) => {
  const msg = text.toLowerCase();

  if (msg.includes("buy")) {
    return "🏠 Sure! We can help you buy MHADA flats. Please tell me your preferred location.";
  }

  if (msg.includes("rent")) {
    return "📍 Looking to rent? Let me know your budget and area preference.";
  }

  if (msg.includes("price") || msg.includes("cost")) {
    return "💰 Prices depend on location and flat type. Which area are you interested in?";
  }

  if (msg.includes("contact") || msg.includes("phone")) {
    return "📞 You can contact our support team at +91 98765 43210.";
  }

  if (msg.includes("mhada")) {
    return "🏢 MHADA provides affordable housing schemes across Maharashtra. What would you like to know?";
  }

  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hello 👋 How can I assist you today?";
  }

  return "🤔 I'm not sure about that yet, but our team will assist you shortly!";
};


  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      { from: "user", text: userMessage },
    ]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: getBotReply(userMessage) },
      ]);
    }, 600); // small delay feels natural

    setInput("");
  };
  return (
    <footer className="font-['Montserrat'] text-white relative">

      {/* ===== YOUR EXISTING FOOTER SECTIONS ===== */}
      {/* (I kept them unchanged for safety) */}

      {/* HELP BOT BUTTON */}
      <div
        onClick={() => setOpenBot(true)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 
        flex items-center bg-[#f17128] 
        border-2 border-white text-white 
        p-2.5 md:px-5 md:py-2.5 
        rounded-full shadow-lg 
        cursor-pointer hover:scale-105 transition-transform z-50"
      >
        <img src="/chatbox.png" className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
        <span className="hidden md:block font-bold text-sm ml-2">
          Help Bot
        </span>
      </div>

      {/* ================= HELP BOT MODAL ================= */}
      {openBot && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setOpenBot(false)}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <div className="fixed bottom-20 right-4 md:right-6 
              w-[90%] max-w-[360px] bg-white text-black 
              rounded-xl shadow-xl z-50 overflow-hidden">

            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3 bg-[#f17128] text-white">
              <h3 className="font-semibold text-sm">Mhada Help Bot</h3>
              <button
                onClick={() => setOpenBot(false)}
                className="text-xl leading-none"
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div className="h-[260px] overflow-y-auto p-3 space-y-2 bg-[#f7f7f7]">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${msg.from === "bot"
                      ? "bg-white text-gray-800 self-start"
                      : "bg-[#f17128] text-white ml-auto"
                    }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 p-3 border-t">
              <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 border rounded-md px-3 py-2 text-sm outline-none"
              />
              <button
                onClick={sendMessage}
                className="bg-[#f17128] text-white px-4 py-2 rounded-md text-sm"
              >
                Send
              </button>
            </div>
          </div>
        </>
      )}
    </footer>
  );
};

export default Footer;
