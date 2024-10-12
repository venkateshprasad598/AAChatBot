import { clsx } from "clsx";
import { MessageInputBox } from "../../components";
import { ChatMessage, GraphResponse } from "../../types";
import Conversations from "./Conversations";

interface ConversationPanelProps {
  isToggle: boolean;
  handleUserMessage: (msg: string) => void;
  chatMessages: ChatMessage[];
  openMediaViewer: (metaData: {
    type: string;
    data: GraphResponse | string | null;
  }) => void;
  isProcessing: boolean;
}

const ConversationPanel: React.FC<ConversationPanelProps> = ({
  isToggle,
  handleUserMessage,
  chatMessages,
  openMediaViewer,
  isProcessing,
}) => {
  return (
    <main
      className={clsx(
        isToggle ? "main-box-transform" : "",
        "mx-auto main-box transition-all ease-out duration-150 w-full"
      )}
    >
      <Conversations
        chatMessages={chatMessages}
        openMediaViewer={openMediaViewer}
        handleUserMessage={handleUserMessage}
        isProcessing={isProcessing}
      />
      <MessageInputBox onSendMessage={handleUserMessage} />
    </main>
  );
};

export default ConversationPanel;
