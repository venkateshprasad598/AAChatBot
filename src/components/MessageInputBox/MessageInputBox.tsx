import { useEffect, useRef, useState } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import "./MessageInputBox.css";

export const MessageInputBox = ({ onSendMessage }) => {
  const [text, setText] = useState("");
  const textAreaRef = useRef(null);

  useEffect(() => {
    resize();
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent newline on enter
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (text.trim() !== "") {
      onSendMessage(text);
      setText(""); // Clear input field after sending
    }
  };

  const resize = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="relative">
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        className="mx-auto send-msg text-md font-medium resize-none bottom-0 w-full outline-none border fixed border-b-0 transition-all ease-out duration-150 pt-[15px] pl-[15px] pr-[50px]"
        placeholder="Message Alfred Assistance"
      />
      <button
        onClick={sendMessage} 
        className="w-[35px] h-[35px] flex-0-auto flex items-center justify-center absolute top-[15px] right-[15px] rounded-full transition-all ease-out duration-150 send-btn"
      >
        <ArrowUpOutlined style={{ color: "#FFFFFF" }} />
      </button>
    </div>
  );
};
