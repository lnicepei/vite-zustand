import { createBrowserRouter } from "react-router-dom";
import MessagesPage from "./MessagesPage";
import Message from "./Message";

const router = createBrowserRouter([
  {
    path: "/messages",
    element: <MessagesPage />,
    children: [{
      path: ":messageId",
      element: <Message />
    }]
  }
]);
