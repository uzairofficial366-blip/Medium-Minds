import { motion } from "framer-motion";

export default function ChatbotButton({ isOpen, onClick }) {
  return (
    <motion.button
      type="button"
      className="mm-chatbot-button"
      onClick={onClick}
      aria-label={isOpen ? "Close MediumMinds assistant" : "Open MediumMinds assistant"}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
    >
      <i className={`fas ${isOpen ? "fa-times" : "fa-comment-dots"}`} />
    </motion.button>
  );
}
