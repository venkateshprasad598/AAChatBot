import { useChatDashboard } from "../../hooks";
import ConversationPanel from "./ConversationPanel";
import MediaDisplay from "./MediaDisplay";

export const ChatContent = () => {
  const { handleUserMessage, showBox, hideBox, isToggle, chatMessages } =
    useChatDashboard();
  return (
    <>
      <ConversationPanel
        showBox={showBox}
        isToggle={isToggle}
        handleUserMessage={handleUserMessage}
        chatMessages={chatMessages}
      />
      <MediaDisplay isToggle={isToggle} hideBox={hideBox} />
    </>
  );
};
