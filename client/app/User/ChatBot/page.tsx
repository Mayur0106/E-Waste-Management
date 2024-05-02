"use client";

import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

interface Message {
  text: string;
  sender: string;
}

const ChatBotPage = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    try {
      // Add user's message to the messages array
      const userMessage: Message = { text: message, sender: 'user' };
      setMessages(prevMessages => [...prevMessages, userMessage]);


      // .post(
      //   `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/api/collectorAuth/findCollector`,

        // const res = await axios.post('https://chatbot-nc19.onrender.com/dispose', { message });
       const res = await axios.post('http://localhost:5000/dispose', { message });
       //const res = await axios.post( `${process.env.ChatBot}/dispose`, { message });

      console.log('Backend Response:', res.data);

      // Add chatbot's response to the messages array
      const botMessage: Message = { text: res.data.response, sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessage]);

      setMessage(''); // Clear input field after sending message
      setError('');
    } catch (error) {
      console.error('Error sending message:', error);
      setError('An error occurred while processing your request. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto border rounded shadow-md p-4 bg-white" style={{ position: 'fixed', bottom: '20px', right: '20px', height: '400px', width: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '2px solid #ccc', overflow: 'auto' }}>
      <style>
        {`
          /* Custom scrollbar */
          .user-message-container::-webkit-scrollbar {
            width: 10px;
          }

          .user-message-container::-webkit-scrollbar-track {
            background: #f1f1f1;
          }

          .user-message-container::-webkit-scrollbar-thumb {
            background: green;
          }
        `}
      </style>
      <h1 className="text-2xl font-bold mb-4 text-center">E-Waste Disposal Chatbot</h1>

      <div className="user-message-container" style={{ maxHeight: '350px', overflowY: 'auto', overflowX: 'hidden' }}>
        {/* Render user's messages and chatbot's responses */}
        {messages.map((msg, index) => (
          <p key={index} className={`p-2 rounded mb-4 ${msg.sender === 'user' ? 'bg-gray-200 text-left' : 'bg-blue-200 text-left'}`}>{msg.text}</p>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {error && <p className="bg-red-100 text-red-700 p-2 rounded mb-4">{error}</p>}
      <div className="flex items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
          placeholder="Type your request..."
          className="flex-1 border border-black rounded-l p-2 focus:outline-none focus:border-black hover:border-black mr-2"
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-r focus:outline-none">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBotPage;
