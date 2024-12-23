import { useEffect } from "react";
import { svgData } from "../../constants/svgData";
import { GraphData } from "../../types";

interface GraphViewerProps {
  openMediaViewer: (metaData: {
    type: string;
    data: string | null | GraphData;
  }) => void;
  type: string;
  mediaData: string | GraphData;
  isGraphViewer: boolean;
  isLastElement: boolean;
}

const GraphViewer = ({
  openMediaViewer,
  type,
  mediaData,
  isGraphViewer,
  isLastElement,
}: GraphViewerProps) => {
  const handleMediaViewer = () => {
    openMediaViewer({
      type: type,
      data: mediaData,
    });
  };

  useEffect(() => {
    if (isLastElement && type && mediaData) {
      handleMediaViewer();
    }
  }, []);

  return (
    <div
      className="bg-white flex items-center cursor-pointer border transition-all ease-out duration-150 rounded-md show-detail-head w-max"
      onClick={handleMediaViewer}
    >
      <div className="w-[80px] h-[80px] shrink-0 rounded rounded-r-none overflow-hidden flex items-center justify-center p-2  border border-t-0 border-b-0 border-r-1 border-l-0">
        {isGraphViewer ? (
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path></svg>`,
              // svgData.codingIcon
            }}
          />
        ) : (
          svgData.userIcon
        )}
      </div>
      <div className="graph-view-card px-3 h-full">
        <h5 className="font-semibold break-words mb-1 capitalize">
          {type == "chart" ? "Chart" : isGraphViewer ? "Graph" : "Image"}
        </h5>
        <p className="text-xs">
          {type == "chart"
            ? "Click to open chart"
            : isGraphViewer
            ? "Click to open graph"
            : "Click to open Image"}
        </p>
      </div>
    </div>
  );
};

export default GraphViewer;
