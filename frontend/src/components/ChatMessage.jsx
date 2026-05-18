export default function ChatMessage({ message }) {
  const isUser = message.role === "user";

  return (
    <div className={`mm-chat-message ${isUser ? "mm-chat-message-user" : "mm-chat-message-bot"}`}>
      {!isUser && (
        <div className="mm-chat-avatar" aria-hidden="true">
          <i className="fas fa-robot" />
        </div>
      )}
      <div className="mm-chat-bubble">{message.content}</div>
    </div>
  );
}
