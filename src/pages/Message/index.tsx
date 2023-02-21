import React from "react";
import { useParams } from "react-router-dom";

const Message = () => {
  const params = useParams();
  const messageId = params.messageId!;

  return <div>{messageId}</div>;
};

export default Message;
