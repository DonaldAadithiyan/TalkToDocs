// frontend/app/bot/page.tsx

import React, { useState } from "react";
import ChatBox from "../../components/ChatBox";

const BotPage = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const handleUserInput = (input: string) => {
    // Add user input to messages array
    setMessages([...messages, input]);

    // Call API to process the input and get a bot response
    // Simulate a response from the bot for now
    setMessages((prevMessages) => [
      ...prevMessages,
      "Bot: Here's a response to your query.",
    ]);
  };

  return (
    <div className="bot-page">
      <h1>Your AI Chatbot</h1>
      <ChatBox messages={messages} onUserInput={handleUserInput} />
    </div>
  );
};

export default BotPage;
