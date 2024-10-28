import React, { ReactNode } from "react";
import "./ResponseMessage.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ResponseMessageProps {
  userQuestion: ReactNode;
}

const MarkdownRenderer = ({ markdownText }) => {
  return <ReactMarkdown remarkPlugins={[remarkGfm]} children={markdownText} />;
};

export const ResponseMessage: React.FC<ResponseMessageProps> = ({
  userQuestion,
}) => {
  return (
    <h5 className="break-words">
      <MarkdownRenderer markdownText={userQuestion} />
    </h5>
  );
};
