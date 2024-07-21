import { LegacyDataDigitilization } from "../page";

export interface routeListProps {
  id: string | number;
  to: string;
  element: React.ReactElement;
}

export const routeList: routeListProps[] = [
  {
    id: "ROUTE-1",
    to: "/legacy-data-digitilization",
    element: <LegacyDataDigitilization />,
  },
];
