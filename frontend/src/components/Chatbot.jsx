import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { sendChatMessage } from "../utils/chatApi";
import ChatbotButton from "./ChatbotButton";
import ChatMessage from "./ChatMessage";

const welcomeMessage = {
  id: "welcome",
  role: "assistant",
  content: "Hi! I’m the MediumMinds assistant. Ask me about our divisions, projects, careers, or how to contact us.",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([welcomeMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading, isOpen]);

  async function handleSubmit(event) {
    event.preventDefault();
    const trimmedInput = input.trim();

    if (!trimmedInput || loading) return;

    const userMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmedInput,
    };

    setMessages((currentMessages) => [...currentMessages, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const reply = await sendChatMessage(trimmedInput);
      setMessages((currentMessages) => [
        ...currentMessages,
        { id: crypto.randomUUID(), role: "assistant", content: reply },
      ]);
    } catch (error) {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: error.message || "The MediumMinds assistant is unavailable right now. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mm-chatbot" aria-live="polite">
      <AnimatePresence>
        {isOpen && (
          <motion.section
            className="mm-chat-window"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            aria-label="MediumMinds assistant chat"
          >
            <header className="mm-chat-header">
              <div>
                <p className="mm-chat-kicker">MediumMinds</p>
                <h2>AI Assistant</h2>
              </div>
              <button
                type="button"
                className="mm-chat-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <i className="fas fa-times" />
              </button>
            </header>

            <div className="mm-chat-messages">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {loading && (
                <div className="mm-chat-message mm-chat-message-bot">
                  <div className="mm-chat-avatar" aria-hidden="true">
                    <i className="fas fa-robot" />
                  </div>
                  <div className="mm-chat-typing" aria-label="Assistant is typing">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form className="mm-chat-input-row" onSubmit={handleSubmit}>
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about MediumMinds..."
                maxLength={1000}
                aria-label="Chat message"
              />
              <button type="submit" disabled={!input.trim() || loading} aria-label="Send message">
                <i className="fas fa-paper-plane" />
              </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      <ChatbotButton isOpen={isOpen} onClick={() => setIsOpen((current) => !current)} />
    </div>
  );
}
