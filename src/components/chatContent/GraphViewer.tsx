import { userProfile } from "../../constants/imageData";

interface GraphViewerProps {
  showBox: () => void;
}
const GraphViewer = ({ showBox }: GraphViewerProps) => {
  return (
    <div
      className="bg-white flex items-center gap-3 cursor-pointer border p-2 transition-all ease-out duration-150 rounded-md show-detail-head "
      onClick={showBox}
    >
      <div className="w-[80px] h-[80px] shrink-0 rounded overflow-hidden flex items-center justify-center">
        <img src={userProfile} className="w-full h-full object-cover" />
      </div>
      <h5 className="font-semibold">Open Garph</h5>
    </div>
  );
};

export default GraphViewer;
