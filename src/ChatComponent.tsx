// components/ChatComponent.tsx
import React, { useState } from "react";
import { Button, Input, Spin, Alert } from "antd";
import { useChat } from "./hooks";

const ChatComponent: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const { chatMessages, loading, error, handleUserMessage, handleButtonClick } =
    useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim()) {
      handleUserMessage(userInput);
      setUserInput("");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      {/* Display Chat Messages (User and Bot sequentially) */}
      {chatMessages.map((msg, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          {msg.sender === "user" ? (
            <div>
              <strong>User:</strong> {msg.text}
            </div>
          ) : (
            <div>
              <strong>Bot:</strong> {msg.text}
              {msg.buttons && (
                <div style={{ marginTop: "10px" }}>
                  {msg.buttons.button1 && (
                    <Button
                      onClick={() =>
                        handleButtonClick(msg.buttons.button1.payload)
                      }
                    >
                      {msg.buttons.button1.label}
                    </Button>
                  )}
                  {msg.buttons.button2 && (
                    <Button
                      onClick={() =>
                        handleButtonClick(msg.buttons.button2.payload)
                      }
                      style={{ marginLeft: "10px" }}
                    >
                      {msg.buttons.button2.label}
                    </Button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      ))}

      {/* Input Section */}
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Enter your message"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onPressEnter={handleSubmit}
        />
      </form>

      {/* Loading Spinner */}
      {loading && <Spin style={{ marginTop: "10px" }} />}

      {/* Error Handling */}
      {error && <Alert message={error} type="error" />}
    </div>
  );
};

export default ChatComponent;
