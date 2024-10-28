import React from "react";
import "./PromptMessage.css";

interface PromptMessageProps {
  userName: string;
  userQuestion: string;
}

export const PromptMessage: React.FC<PromptMessageProps> = ({
  userName,
  userQuestion,
}) => {
  return (
    <div className="w-full h-full mb-[15px] msg-card">
      <div
        className="group relative inline-flex items-start gap-2 bg-gradient-to-b from-bg-300 from-50% to-bg-400 rounded-xl px-3 py-3
        break-words text-text-200 transition-all max-w-[100%] shadow-[0_2px_16px_rgba(0,0,0,0.025)] min-w-[16ch] min-h-[50px]"
      >
        <div className="w-[30px] h-[30px] shrink-0 rounded-full overflow-hidden flex items-center justify-center profile-icon">
          <h5 className="text-nose font-bold text-xs mb-0 text-white break-words">
            {userName}
          </h5>
        </div>
        <h4 className="text-sm text-nose tracking-wider translate-y-[5px] break-words prodile-content-calc-width">
          {userQuestion}
        </h4>
      </div>
    </div>
  );
};
