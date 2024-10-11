import { useEffect, useRef, useState } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import "./SendMsg.css";

export const SendMsg = () => {
  // text area resize js start
  const [text, setText] = useState("");
  const textAreaRef = useRef(null);

  useEffect(() => {
    resize();
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const resize = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };
  // text area resize js end
  return (
    <>
      <div
        className="
      relative"
      >
        <textarea
          ref={textAreaRef}
          value={text}
          onChange={handleChange}
          className="mx-auto send-msg text-md font-medium resize-none bottom-0 w-full outline-none border fixed bottom-0 border-b-0 transition-all ease-out duration-150 pt-[15px] pl-[15px] pr-[50px]"
          placeholder="Replay to ChatBot..."
        />
        <button className="w-[35px] h-[35px] flex-0-auto flex items-center justify-center absolute top-[15px] right-[15px] rounded-full transition-all ease-out duration-150 send-btn">
          <ArrowUpOutlined style={{ color: "#FFFFFF" }} />
        </button>
      </div>
    </>
  );
};
