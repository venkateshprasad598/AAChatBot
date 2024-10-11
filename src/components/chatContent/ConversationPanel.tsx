import { clsx } from "clsx";
import { MessageInputBox } from "../../components";
import { ChatMessage } from "../../types";
import Conversations from "./Conversations";

interface ConversationPanelProps {
  isToggle: boolean;
  showBox: () => void;
  handleUserMessage: (msg: string) => void;
  chatMessages: ChatMessage[];
}

const ConversationPanel: React.FC<ConversationPanelProps> = ({
  isToggle,
  showBox,
  handleUserMessage,
  chatMessages
}) => {
  return (
    <main
      className={clsx(
        isToggle ? "main-box-transform" : "",
        "mx-auto main-box transition-all ease-out duration-150 w-full"
      )}
    >
      <Conversations showBox={showBox} chatMessages={chatMessages} />
      <MessageInputBox onSendMessage={handleUserMessage} />
    </main>
  );
};

export default ConversationPanel;
