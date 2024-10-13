import ForceGraph from "../graph/ForceGraph";

export const GraphViewer = ({ graphData }: { graphData: any }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <ForceGraph nodesAndRelationships={{ ...graphData }} />;
    </div>
  );
};
