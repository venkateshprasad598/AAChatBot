import React, { useState } from "react";
import { Input, Button, Layout, Avatar } from "antd";
import { SendOutlined, UserOutlined, RobotOutlined } from "@ant-design/icons";
import "tailwindcss/tailwind.css";

const { Header, Content, Footer } = Layout;

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");

      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "Hello! How can I help you?" },
        ]);
      }, 1000);
    }
  };

  return (
    <Layout className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <Header className="bg-blue-500">
        <div className="text-white text-lg">ChatGPT App</div>
      </Header>

      {/* Chat Room */}
      <Content className="flex-grow flex justify-center items-center bg-gray-100">
        <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg p-4 flex flex-col">
          <div className="flex-grow overflow-auto p-4 space-y-4">
            {/* Display Messages */}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div className="flex items-center space-x-2">
                  {msg.sender === "bot" && <Avatar icon={<RobotOutlined />} />}
                  <div
                    className={`px-4 py-2 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-black"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.sender === "user" && <Avatar icon={<UserOutlined />} />}
                </div>
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="flex items-center border-t p-4">
            <Input
              className="flex-grow"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onPressEnter={sendMessage}
            />
            <Button
              type="primary"
              icon={<SendOutlined />}
              onClick={sendMessage}
              className="ml-2"
            >
              Send
            </Button>
          </div>
        </div>
      </Content>

      <Footer className="text-center bg-gray-200">ChatGPT App ©2024</Footer>
    </Layout>
  );
};

export default ChatApp;
