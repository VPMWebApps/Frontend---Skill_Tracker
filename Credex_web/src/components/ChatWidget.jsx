import React, { useState, useRef, useEffect } from 'react';

const mockResponses = {
  'How do I sell my license?': 'You just need to upload your license info, and we’ll handle the rest!',
  'How long does it take to get paid?': 'Typically within 2–3 business days after validation.',
};

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input };
    const botText = mockResponses[input] || 'Sorry, I don’t have an answer to that right now.';
    const botMsg = { role: 'bot', text: botText };
    setMessages([...messages, userMsg, botMsg]);
    setInput('');
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none"
        aria-label="Open chat"
        title="Open chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.888L3 20l1.888-4.255A8.959 8.959 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-80 h-[450px] bg-white rounded-lg shadow-lg overflow-hidden border flex flex-col">
      <div className="bg-indigo-600 text-white p-4 font-semibold flex justify-between items-center">
        SoftSell Chat
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-gray-300 focus:outline-none"
          aria-label="Close chat"
          title="Close chat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-2 text-sm">
        {messages.map((msg, idx) => (
          <div key={idx} className={`p-2 rounded ${msg.role === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'}`}>{msg.text}</div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex border-t">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 p-2 text-sm focus:outline-none"
          onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
        />
        <button onClick={handleSend} className="bg-indigo-600 text-white px-4">Send</button>
      </div>
    </div>
  );
}
