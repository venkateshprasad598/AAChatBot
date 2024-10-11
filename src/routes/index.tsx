import ChatComponent from "../ChatComponent";
import ForceGraph from "../components/graph/ForceGraph";
import { ChatDashboard } from "../page";

export interface routeListProps {
  id: string | number;
  to: string;
  element: React.ReactElement;
}

export const routeList: routeListProps[] = [
  {
    id: "ROUTE-1",
    to: "/",
    element: <ChatDashboard />,
  },
  {
    id: "ROUTE-2",
    to: "/chat",
    element: <ChatComponent />,
  },
  {
    id: "ROUTE-3",
    to: "/graph",
    element: <ForceGraph />,
  },
];
