import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import clsx from "clsx";
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
        true ? "show-box-transform right-[15px]" : "",
        "show-box fixed right-0 bg-bg-100 border-0.5 border-border-300 flex-1 overflow-y-auto rounded-xl w-full transition-all ease-out duration-150"
      )}
    >
       <button
            className="border p-2 rounded hover-bg transition-all ease-out duration-150 ml-auto flex items-center justify-center mt-3 mr-3 mb-3 bg-white"
            onClick={hideBox}
          >
            <CloseOutlined />
          </button>
      <div>
        <div className="mb-2 xl:mb-4 grid grid-cols-1 lg:grid-cols-2	gap-2 xl:gap-4">
            <div className="bg-white min-h-[250px] 1xl:shadow-lg">
               <div className="px-4 py-1 border bottom-1 border-t-0 border-l-0 border-r-0 flex items-center gap-3 sticky top-0 show-box-header h-[50px]">
                <h4 className="mb-0 font-medium text-md text-gray-700">Open Graph</h4>
              </div>
              <div className="p-3">
                <p className="text-sm leading-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque enim officia dolores beatae tenetur dolor quisquam eum quasi mollitia, similique ab quos voluptatibus id dolorem explicabo, voluptatum voluptate autem. Blanditiis?</p>
              </div>
            </div>
            <div className="bg-white min-h-[250px] 1xl:shadow-lg">
               <div className="px-4 py-1 border bottom-1 border-t-0 border-l-0 border-r-0 flex items-center gap-3 sticky top-0 show-box-header h-[50px]">
                <h4 className="mb-0 font-medium text-md text-gray-700">Open Graph</h4>
              </div>
              <div className="p-3">
                <p className="text-sm leading-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque enim officia dolores beatae tenetur dolor quisquam eum quasi mollitia, similique ab quos voluptatibus id dolorem explicabo, voluptatum voluptate autem. Blanditiis?</p>
              </div>
            </div>
        </div>
        <div className="w-100 bg-white 1xl:shadow-lg">
          <div className="px-4 py-1 border bottom-1 border-t-0 border-l-0 border-r-0 flex items-center gap-3 sticky top-0 show-box-header h-[50px]">
            <h4 className="mb-0 font-medium text-md">Open Graph</h4>
          </div>
          <div className="overflow-y-auto">
            {/* {media?.type === "graph" ? ( */}
            <GraphViewer graphData={media?.data} />
            {/* ) : media?.type === "image" ? ( */}
            {/* <ImageViewer imageSrc={media?.data} /> */}
            {/* ) : ( */}
            {/* <h5 className="p-3 text-center">No data to display</h5> */}
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaDisplay;
