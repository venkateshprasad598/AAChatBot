import React, { ReactNode } from "react";
import "./SendReplay.css";

interface SendReplayProps {
  userQuestion: ReactNode;
}

export const SendReplay: React.FC<SendReplayProps> = ({ userQuestion }) => {
  return (
    <div className="w-full h-full mb-[15px]">
      <div className="bg-white px-3 py-3 rounded-xl max-w-[75ch] shadow-[0_2px_16px_rgba(0,0,0,0.025)] min-w-[16ch] min-h-[10ch] border replay-msg text-sm text-nose tracking-wider flex flex-col gap-3">
        {userQuestion}
      </div>
    </div>
  );
};
