import React, { ReactNode } from "react";
import "./ResponseMessage.css";

interface ResponseMessageProps {
  userQuestion: ReactNode;
}

export const ResponseMessage: React.FC<ResponseMessageProps> = ({
  userQuestion,
}) => {
  return <h5 className="break-words">{userQuestion}</h5>;
};
