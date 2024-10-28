import { Button, Spin } from "antd";
import { ChatMessage, GraphResponse } from "../../types";
import { PromptMessage } from "../PromptMessage/PromptMessage";
import { ResponseMessage } from "../ResponseMessage/ResponseMessage";
import GraphViewer from "./GraphViewer";
import { useEffect, useRef } from "react";
import { getFirstAlphabetOfUsername } from "../../utils";

interface ConversationProps {
  chatMessages: ChatMessage[];
  openMediaViewer: (metaData: {
    type: string;
    data: string | null | GraphResponse;
    handleUserMessage: (msg: string) => void;
  }) => void;
  handleUserMessage: (msg: string) => void;
  isProcessing: boolean;
}

const Conversations = ({
  chatMessages,
  openMediaViewer,
  handleUserMessage,
  isProcessing,
}: ConversationProps) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const username = getFirstAlphabetOfUsername();
  const chatMessagesLength = chatMessages?.length - 1;
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages]);

  // Display greeting message when chatMessages is empty
  if (chatMessages.length === 0) {
    return (
      <div className="flex items-center justify-center content-area">
        <h1 className="md:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-nose">
          Hello, how can I help?
        </h1>
      </div>
    );
  }

  return (
    <div className="content-area overflow-y-auto pr-1">
      {chatMessages.map((message, index) => {
        if (message.sender === "user" && message?.question) {
          return (
            <PromptMessage
              key={index}
              userName={username}
              userQuestion={message?.question}
            />
          );
        }

        if (message.sender === "bot") {
          return (
            <div className="w-full h-full mb-[15px] msg-card">
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

                  {message?.chart_html && (
                    <GraphViewer
                      isGraphViewer={false}
                      type="chart"
                      mediaData={message?.chart_html}
                      openMediaViewer={openMediaViewer}
                      isLastElement={index === chatMessagesLength}
                    />
                  )}

                  {message?.image && (
                    <GraphViewer
                      isGraphViewer={false}
                      type="image"
                      mediaData={message?.image}
                      openMediaViewer={openMediaViewer}
                      isLastElement={index === chatMessagesLength}
                    />
                  )}

                  {message?.knowledge_graph && (
                    <GraphViewer
                      isGraphViewer={true}
                      openMediaViewer={openMediaViewer}
                      type="graph"
                      mediaData={message?.knowledge_graph}
                      isLastElement={index === chatMessagesLength}
                    />
                  )}

                  {message.buttons && (
                    <div className="button-group flex gap-2 justify-end flex-wrap">
                      {Object.entries(message.buttons).map(([key, button]) => {
                        return (
                          <Button
                            key={key}
                            type="primary"
                            className="btn btn-green-border"
                            onClick={() => handleUserMessage(button.label)}
                          >
                            {button.label}
                          </Button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}

      {isProcessing && (
        <div className="w-full flex justify-center items-center mt-4">
          <Spin size="large" />
        </div>
      )}
      <div ref={bottomRef} />
    </div>
  );
};

export default Conversations;
