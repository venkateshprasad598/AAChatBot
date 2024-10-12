import { Button } from "antd";
import { ChatMessage } from "../../types";
import { PromptMessage } from "../PromptMessage/PromptMessage";
import { ResponseMessage } from "../ResponseMessage/ResponseMessage";
import GraphViewer from "./GraphViewer";

interface ConversationProps {
  showBox: () => void;
  chatMessages: ChatMessage[];
}

const Conversations = ({ showBox, chatMessages }: ConversationProps) => {
  return (
    <div className="content-area overflow-y-auto">
      {chatMessages.map((message, index) => {
        // User message
        if (message.sender === "user" && message.text) {
          return (
            <PromptMessage
              key={index}
              userName="TL"
              userQuestion={message.text}
            />
          );
        }

        // Bot message
        if (message.sender === "bot") {
          return (
            <div className="w-full h-full mb-[15px]">
              <div className="bg-white px-3 py-3 rounded-xl max-w-[75ch] shadow-[0_2px_16px_rgba(0,0,0,0.025)] min-w-[16ch] min-h-[5ch] border replay-msg text-sm text-nose tracking-wider flex flex-col gap-3">
                <div key={index} className="bot-response">
                  {message.markdown_text && (
                    <ResponseMessage userQuestion={message.markdown_text} />
                  )}
                  {/* {message.chart_html && (
                    <div
                      className="chart-container mb-[15px]"
                      dangerouslySetInnerHTML={{ __html: message.chart_html }}
                    />
                  )} */}

                  {message.image && <GraphViewer showBox={showBox} />}

                  <GraphViewer showBox={showBox} />

                  {message.buttons && (
                    <div className="button-group flex gap-2 mt-[15px] ">
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
                  )}
                </div>
              </div>
            </div>
          );
        }

        // Default return if no match
        return null;
      })}
    </div>
  );
};

export default Conversations;
