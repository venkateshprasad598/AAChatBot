import { CloseOutlined } from "@ant-design/icons";
import clsx from "clsx";
import React from "react";
import { Imedia } from "../../types";
import { GraphViewer, ImageViewer } from "../media";

interface MediaDisplayProps {
  isToggle: boolean;
  hideBox: () => void;
  media: Imedia;
}

const MediaDisplay: React.FC<MediaDisplayProps> = ({
  hideBox,
  isToggle,
  media,
}) => {
  return (
    <div
      className={clsx(
        isToggle ? "show-box-transform right-[15px]" : "",
        "show-box fixed right-0 bg-bg-100 border-0.5 border-border-300 flex-1 overflow-y-auto bg-white border rounded-xl 2xl:shadow-lg w-full transition-all ease-out duration-150"
      )}
    >
      <div className="px-4 py-1 border bottom-1 border-t-0 border-l-0 border-r-0 flex items-center gap-3 sticky top-0 show-box-header h-[50px]">
        <h4 className="mb-0 font-medium text-md">Open Graph</h4>
        <button
          className="border p-2 rounded hover-bg transition-all ease-out duration-150 ml-auto flex items-center justify-center"
          onClick={hideBox}
        >
          <CloseOutlined />
        </button>
      </div>
      <div className="overflow-y-auto media-display-content-wrap">
        {media?.type == "graph" ? (
          <GraphViewer graphData={media?.data} />
        ) : media?.type == "image" ? (
          <ImageViewer imageSrc={""} />
        ) : (
          <h5 className="p-3 text-center">No data to display</h5>
        )}
      </div>
    </div>
  );
};

export default MediaDisplay;
