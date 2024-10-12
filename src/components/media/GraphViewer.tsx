import { GraphData } from "../../types";
import ForceGraph from "../graph/ForceGraph";

export const GraphViewer = ({ graphData }: { graphData: GraphData }) => {
  console.log({ graphData });

  return <ForceGraph nodesAndRelationships={graphData} />;
};
