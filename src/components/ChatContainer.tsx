'use client';

import { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import ToggleBar from './ToggleBar';
import { Message, Mode, Audience } from '@/types';
import { sendAIQuery, getLocationFromSlug } from '@/lib/api';

interface ChatContainerProps {
  slug: string;
}

const WELCOME_MESSAGE = `Namaste! I am your guide to this sacred place. Let me share the stories woven into these ancient walls. What would you like to know?`;

export default function ChatContainer({ slug }: ChatContainerProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: WELCOME_MESSAGE,
    },
  ]);
  const [mode, setMode] = useState<Mode>('story');
  const [audience, setAudience] = useState<Audience>('general');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const location = getLocationFromSlug(slug);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (userMessage: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: userMessage,
    };

    const loadingMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: '',
      isLoading: true,
    };

    setMessages((prev) => [...prev, userMsg, loadingMsg]);
    setIsLoading(true);

    try {
      const response = await sendAIQuery({
        query: userMessage,
        location: location || 'gwalior',
        mode,
        audience,
      });

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === loadingMsg.id
            ? { ...msg, content: response.text, isLoading: false }
            : msg
        )
      );
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === loadingMsg.id
            ? {
                ...msg,
                content: 'Apologies, something went wrong. Please try again.',
                isLoading: false,
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] bg-[#F5EFE6]">
      <ToggleBar
        mode={mode}
        audience={audience}
        onModeChange={setMode}
        onAudienceChange={setAudience}
      />

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput onSend={handleSend} disabled={isLoading} />
    </div>
  );
}
