import { CloseOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React from "react";

interface GraphPropertiesModalProps {
  modalOpen: boolean;
  handleModalClose: () => void;
  selectedNode?: {
    name?: string;
    properties?: { [key: string]: any };
  };
  handleShowMore: (param: any) => void;
}

const orderedKeys = [
  "event_type",
  "event_summary",
  "expected_minimum_strength",
  "expected_maximum_strength",
  "start_event_date",
  "start_event_time",
  "end_event_date",
  "end_event_time",
  "role_in_event",
  "designation",
  "contact_no",
  "Venue",
  "Reason",
  "Nature_of_Event",
  "Route",
  "start_point",
  "mid_points",
  "end_point",
];

const formatKey = (key: string) => {
  return key
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const GraphPropertiesModal: React.FC<GraphPropertiesModalProps> = ({
  modalOpen,
  handleModalClose,
  selectedNode,
  handleShowMore,
}) => {
  let isAvailable = false;

  console.log({ selectedNode: selectedNode });

  return (
    <Modal
      title={
        <span className="text-2xl font-semibold text-center">
          {selectedNode?.name || "Graph Properties"}
        </span>
      }
      open={modalOpen}
      onCancel={handleModalClose}
      footer={
        <div className="flex justify-end gap-4">
          <Button onClick={handleShowMore}>Show More</Button>
        </div>
      }
      width={"50%"}
      centered
      closeIcon={<CloseOutlined />}
    >
      <div className="px-4">
        <span className="text-lg font-bold">Details</span>
        <div className="flex flex-col gap-2 mt-1">
          {selectedNode?.properties &&
          Object.keys(selectedNode?.properties).length
            ? Object.keys(selectedNode?.properties).map((key) => {
                if (key in selectedNode.properties) {
                  isAvailable = true;
                  return (
                    <div key={key} className="flex flex-col">
                      <span className="text-base font-semibold">
                        {formatKey(key)}
                      </span>
                      <span className="text-base font-semibold text-gray-600">
                        {selectedNode.properties[key] || "N/A"}
                      </span>
                    </div>
                  );
                }
                return null;
              })
            : "N/A"}
          {!isAvailable && <span>N/A</span>}
        </div>
      </div>
    </Modal>
  );
};

export default GraphPropertiesModal;
