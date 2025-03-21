// frontend/components/ChatBox.tsx
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

// Define types for the response data structure
interface ChatResponse {
  response: string;
}

const ChatBox = () => {
  const [query, setQuery] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const handleQueryChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post<ChatResponse>('http://127.0.0.1:8000/chat', { query });
      setResponse(res.data.response);
    } catch (error) {
      setResponse('Error fetching response.');
    }
  };

  return (
    <div>
      <textarea value={query} onChange={handleQueryChange} placeholder="Ask a question..." />
      <button onClick={handleSubmit}>Ask</button>
      <div>{response}</div>
    </div>
  );
};

export default ChatBox;
