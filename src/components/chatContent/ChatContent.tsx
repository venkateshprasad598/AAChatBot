import { useEffect } from "react";
import { useChatDashboard, useChatMediaViewer } from "../../hooks";
import ConversationPanel from "./ConversationPanel";
import MediaDisplay from "./MediaDisplay";

export const ChatContent = () => {
  const { handleUserMessage, chatMessages, isProcessing } = useChatDashboard();
  const { isToggle, hideBox, openMediaViewer, media } = useChatMediaViewer();

  useEffect(() => {
    const lastChatMessage = chatMessages[chatMessages?.length - 1];
    if (
      !lastChatMessage?.chart_html ||
      !lastChatMessage?.image ||
      !lastChatMessage?.knowledge_graph
    ) {
      hideBox();
    }
  }, [chatMessages]);

  return (
    <>
      <ConversationPanel
        isToggle={isToggle}
        handleUserMessage={handleUserMessage}
        chatMessages={chatMessages}
        openMediaViewer={openMediaViewer}
        isProcessing={isProcessing}
      />
      {media?.data && (
        <MediaDisplay isToggle={isToggle} hideBox={hideBox} media={media} />
      )}
    </>
  );
};
