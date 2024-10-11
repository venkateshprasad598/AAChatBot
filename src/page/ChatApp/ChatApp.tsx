import React, { useState } from "react";
// import { Input, Button, Layout, Avatar } from "antd";
// import { SendOutlined, UserOutlined, RobotOutlined } from "@ant-design/icons";
import {
  AskQuestion,
  Header,
  SendMsg,
  SendReplay,
  ShowChatMoreData,
} from "../../components";
// import { userProfile } from "../../constants";
import { CaretLeftFilled } from "@ant-design/icons";
import { clsx } from "clsx";
import { userProfile } from "../../constants/imageData";
// import "tailwindcss/tailwind.css";

const ChatApp = () => {
  // const [messages, setMessages] = useState([]);
  // const [input, setInput] = useState("");

  // const sendMessage = () => {
  //   if (input.trim()) {
  //     setMessages([...messages, { sender: "user", text: input }]);
  //     setInput("");

  //     // Simulate bot response
  //     setTimeout(() => {
  //       setMessages((prevMessages) => [
  //         ...prevMessages,
  //         { sender: "bot", text: "Hello! How can I help you?" },
  //       ]);
  //     }, 1000);
  //   }
  // };

  // show right side card js start
  const [isToggle, setIsToggle] = useState(false);
  const showBox = () => {
    setIsToggle(true);
  };
  const hideBox = () => {
    setIsToggle(false);
  };
  // show right side card js end
  return (
    <>
      <Header />
      <main
        className={clsx(
          isToggle ? "main-box-transform" : "",
          "mx-auto main-box transition-all ease-out duration-150 w-full"
        )}
      >
        <div className="content-area overflow-y-auto">
          <AskQuestion
            userName="TL"
            userQuestion="Give me a visualization example"
          />
          <SendReplay
            userQuestion={
              <>
                <h5>
                  I'd be happy to provide a visualization example. Could you
                  please specify what kind of visualization you're interested
                  in? There are many types, such as charts, graphs, diagrams, or
                  even more complex data visualizations.
                </h5>
              </>
            }
          />
          <AskQuestion
            userName="TL"
            userQuestion="Give me a visualization example with live chart and exmaple in code view"
          />
          <SendReplay
            userQuestion={
              <>
                <h5>
                  Certainly! I'll create a simple bar chart visualization using
                  a React component with the Recharts library. This chart will
                  display monthly sales data for a hypothetical company.
                </h5>
                <div
                  className="flex items-center gap-3 cursor-pointer border p-2 transition-all ease-out duration-150 rounded-md show-detail-head"
                  onClick={showBox}
                >
                  <div className="w-[80px] h-[80px] shrink-0 rounded overflow-hidden flex items-center justify-center">
                    <img
                      src={userProfile}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="font-semibold">Open Garph</h5>
                </div>
              </>
            }
          />
        </div>
        <SendMsg />
      </main>
      <div
        className={clsx(
          isToggle ? "show-box-transform" : "",
          "show-box fixed right-0 bg-bg-100 border-0.5 border-border-300 flex-1 overflow-y-auto bg-white border rounded-xl shadow-lg w-full transition-all ease-out duration-150"
        )}
      >
        <div className="px-4 py-2 border bottom-1 border-t-0 border-l-0 border-r-0 flex items-center gap-3 sticky top-0 show-box-header">
          <button
            className="border p-2 rounded hover-bg transition-all ease-out duration-150"
            onClick={hideBox}
          >
            <CaretLeftFilled />
          </button>
          <h4 className="mb-0 font-medium text-md">Open Garph</h4>
        </div>
        <div className="overflow-y-auto">
          <ShowChatMoreData />
        </div>
      </div>
      {/* <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg p-4 flex flex-col">
        <div className="flex-grow overflow-auto p-4 space-y-4">
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
      </div> */}
    </>
  );
};

export default ChatApp;
