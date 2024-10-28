import ForceGraph2D from "react-force-graph-2d";

const CustomForceGraph = ({
  fgRef,
  graphData,
  handleNodeClick,
  handleHoveredNode,
  hoveredNode,
  getConnectedNodesAndLinks,
}) => {
  // Helper function for drawing a node with avatar or default circle
  const drawNode = (node, ctx) => {
    const size = 23;
    const radius = size / 2;
    const fontSize = 4.5;
    const nodeNameOffset = 0;

    const { connectedNodes } = hoveredNode
      ? getConnectedNodesAndLinks(hoveredNode.id)
      : { connectedNodes: new Set() };
    const isConnected =
      hoveredNode &&
      (node.id === hoveredNode.id || connectedNodes.has(node.id));
    const isParent = hoveredNode && node.id === hoveredNode.id;

    if (node.avatar) {
      const img = new Image();
      img.src = node.avatar;
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(node.x, node.y, radius, radius, 0, 0, 2 * Math.PI);
      ctx.clip();
      ctx.drawImage(img, node.x - radius, node.y - radius, size, size);
      ctx.restore();

      ctx.font = `${fontSize}px Open Sans, sans-serif`;
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText(
        node.name,
        node.x,
        node.y + radius + fontSize + nodeNameOffset
      );
    } else {
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI);
      ctx.fillStyle = node.parentColor;
      ctx.fill();

      if (isConnected) {
        ctx.strokeStyle = isParent ? "red" : "#a38724";
        ctx.lineWidth = 6;
        ctx.stroke();
      }

      ctx.font = `bold ${fontSize}px Open Sans, sans-serif`;
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(node.name, node.x, node.y);
    }
  };

  // Helper function for drawing the link label
  const drawLinkLabel = (link, ctx) => {
    const LABEL_NODE_MARGIN = 4;
    const { source: start, target: end } = link;

    const textPos = {
      x: start.x + (end.x - start.x) / 2,
      y: start.y + (end.y - start.y) / 2,
    };

    const relLink = { x: end.x - start.x, y: end.y - start.y };
    const linkLength = Math.sqrt(
      Math.pow(relLink.x, 2) + Math.pow(relLink.y, 2)
    );

    if (linkLength < LABEL_NODE_MARGIN * 2) return;

    const fontSize = 4;
    const fontWeight = 700;
    const angle = Math.atan2(relLink.y, relLink.x);

    ctx.save();
    ctx.translate(textPos.x, textPos.y);
    ctx.rotate(angle);
    ctx.font = `${fontWeight} ${fontSize}px Open Sans, sans-serif`;
    ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(link.type, 0, 0);
    ctx.restore();
  };

  // Link color handler
  const getLinkColor = (link) => {
    if (!hoveredNode) return "rgba(0, 0, 0, 0.2)";
    const { connectedLinks } = getConnectedNodesAndLinks(hoveredNode.id);
    return connectedLinks.has(link) ? "#b0aea7" : "rgba(0, 0, 0, 0.2)";
  };

  // Link width handler
  const getLinkWidth = (link) => {
    if (!hoveredNode) return 1;
    const { connectedLinks } = getConnectedNodesAndLinks(hoveredNode.id);
    return connectedLinks.has(link) ? 4 : 1;
  };

  // Node drag end handler
  const handleNodeDragEnd = (node) => {
    node.fx = node.x;
    node.fy = node.y;
  };

  return (
    <ForceGraph2D
      ref={fgRef}
      width={685}
      height={600}
      graphData={graphData}
      nodeLabel="name"
      linkLabel="name"
      onNodeClick={handleNodeClick}
      nodeAutoColorBy="parentColor"
      minZoom={0.5}
      maxZoom={10}
      zoom={10}
      showNavInfo={true}
      nodeRelSize={5}
      nodeResolution={5}
      linkResolution={5}
      linkDirectionalArrowLength={3}
      linkDirectionalArrowRelPos={0}
      onNodeHover={handleHoveredNode}
      nodeCanvasObject={drawNode}
      linkCanvasObjectMode={() => "after"}
      linkCanvasObject={drawLinkLabel}
      onNodeDragEnd={handleNodeDragEnd}
      linkColor={getLinkColor}
      linkWidth={getLinkWidth}
    />
  );
};

export default CustomForceGraph;
