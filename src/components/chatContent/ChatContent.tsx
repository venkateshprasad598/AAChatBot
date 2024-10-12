import { useChatDashboard, useChatMediaViewer } from "../../hooks";
import ConversationPanel from "./ConversationPanel";
import MediaDisplay from "./MediaDisplay";

export const ChatContent = () => {
  const { handleUserMessage, chatMessages } = useChatDashboard();

  const { isToggle, showBox, hideBox, openMediaViewer, media } =
    useChatMediaViewer();

  return (
    <>
      <ConversationPanel
        showBox={showBox}
        isToggle={isToggle}
        handleUserMessage={handleUserMessage}
        chatMessages={chatMessages}
        openMediaViewer={openMediaViewer}
      />
      {media?.data && (
        <MediaDisplay isToggle={isToggle} hideBox={hideBox} media={media} />
      )}
    </>
  );
};
