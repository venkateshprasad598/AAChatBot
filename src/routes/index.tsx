import ChatComponent from "../ChatComponent";
import ForceGraph from "../components/graph/ForceGraph";

export interface routeListProps {
  id: string | number;
  to: string;
  element: React.ReactElement;
}

export const routeList: routeListProps[] = [
  {
    id: "ROUTE-1",
    to: "/chat",
    element: <ChatComponent />,
  },
  {
    id: "ROUTE-2",
    to: "/graph",
    element: <ForceGraph />,
  },
];
