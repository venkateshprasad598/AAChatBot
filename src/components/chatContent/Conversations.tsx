import { Button } from "antd";
import { ChatMessage } from "../../types";
import { PromptMessage } from "../PromptMessage/PromptMessage";
import { ResponseMessage } from "../ResponseMessage/ResponseMessage";

interface ConversationProps {
  showBox: () => void;
  chatMessages: ChatMessage[];
}

const Conversations = ({ showBox, chatMessages }: ConversationProps) => {
  return (
    <div className="content-area overflow-y-auto">
      {chatMessages.map((message, index) => {
        // If sender is 'user', show the PromptMessage component
        if (message.sender === "user" && message.text) {
          return (
            <PromptMessage
              key={index}
              userName="TL" // Example, replace with the real username
              userQuestion={message.text}
            />
          );
        }

        // If sender is 'bot', show the ResponseMessage component
        if (message.sender === "bot") {
          if (message.text) {
            return <ResponseMessage key={index} userQuestion={message.text} />;
          }

          // If the bot response includes buttons
          if (message.buttons) {
            return (
              <div key={index} className="button-response mb-[15px]">
                <div className="button-group flex gap-2">
                  {message.buttons.button1 && (
                    <Button
                      type="primary"
                      className="btn"
                      onClick={() => showBox()}
                    >
                      {message.buttons.button1.label}
                    </Button>
                  )}
                  {message.buttons.button2 && (
                    <Button
                      type="primary"
                      className="btn"
                      onClick={() => showBox()}
                    >
                      {message.buttons.button2.label}
                    </Button>
                  )}
                </div>
              </div>
            );
          }

          // <GraphViewer showBox={showBox} />;
        }

        // Default return in case no message matches
        return null;
      })}
    </div>
  );
};

export default Conversations;
