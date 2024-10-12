import { Button } from "antd";
import { ChatMessage, GraphResponse } from "../../types";
import { PromptMessage } from "../PromptMessage/PromptMessage";
import { ResponseMessage } from "../ResponseMessage/ResponseMessage";
import GraphViewer from "./GraphViewer";

interface ConversationProps {
  showBox: () => void;
  chatMessages: ChatMessage[];
  openMediaViewer: (metaData: { type: string; data: GraphResponse }) => void;
}

const Conversations = ({
  showBox,
  chatMessages,
  openMediaViewer,
}: ConversationProps) => {
  const handleMediaViewer = (type: string, message: ChatMessage) => {
    openMediaViewer({
      type: type,
      data:
        type == "graph"
          ? message?.knowledge_graph
          : type == "image"
          ? message?.image
          : null,
    });
  };

  return (
    <div className="content-area overflow-y-auto pr-1">
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
              <div className="bg-white px-3 py-3 rounded-xl max-w-[100%] shadow-[0_2px_16px_rgba(0,0,0,0.025)] min-w-[16ch] min-h-[5ch] border replay-msg text-sm text-nose tracking-wider flex flex-col gap-3">
                <div key={index} className="bot-response flex flex-col gap-3">
                  {message.markdown_text && (
                    <ResponseMessage userQuestion={message.markdown_text} />
                  )}
                  {/* {message.chart_html && (
                    <div
                      className="chart-container mb-[15px]"
                      dangerouslySetInnerHTML={{ __html: message.chart_html }}
                    />
                  )} */}

                  {message.image && <GraphViewer showBox={showBox} codeViewIcon={false} />}

                  <div onClick={() => handleMediaViewer("graph", message)}>
                    Graph
                  </div>
                  <div onClick={() => handleMediaViewer("image", message)}>
                    Image
                  </div>
                  <GraphViewer codeViewIcon={true} showBox={showBox} />

                  {message.buttons && (
                    <div className="button-group flex gap-2 justify-end flex-wrap">
                      {message.buttons.button1 && (
                        <Button type="primary" className="btn btn-green-border">
                          {message.buttons.button1.label}
                        </Button>
                      )}
                      {message.buttons.button2 && (
                        <Button type="primary" className="btn btn-green-border btn-red-border">
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
