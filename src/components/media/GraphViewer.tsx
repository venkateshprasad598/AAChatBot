import ForceGraph from "../graph/ForceGraph";

export const GraphViewer = ({ graphData }: { graphData: any }) => {
  return <ForceGraph nodesAndRelationships={graphData} />;
};
