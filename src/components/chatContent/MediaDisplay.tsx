import { CaretLeftFilled } from "@ant-design/icons";
import clsx from "clsx";
import React from "react";
import { ShowChatMoreData } from "../ShowChatMoreData/ShowChatMoreData";

interface MediaDisplayProps {
  isToggle: boolean;
  hideBox: () => void;
}

const MediaDisplay: React.FC<MediaDisplayProps> = ({ hideBox, isToggle }) => {
  return (
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
        <h4 className="mb-0 font-medium text-md">Open Graph</h4>
      </div>
      <div className="overflow-y-auto">
        <ShowChatMoreData />
      </div>
    </div>
  );
};

export default MediaDisplay;
