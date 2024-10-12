import { Dropdown, MenuProps, Space } from "antd";
import profileOne from "./../../assets/images/avatar/profile-one.jpg";
import { DownOutlined } from "@ant-design/icons";

import "./Header.css";
import { useSearchParams } from "react-router-dom";
const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Rename",
  },
  {
    key: "2",
    label: "Delete",
  },
];
export const Header = () => {
  const [searchParams] = useSearchParams();
  const selectedState = searchParams?.get("selected-state");
  const selectedStateLabel =
    selectedState == "delhi"
      ? "Delhi"
      : selectedState == "tn"
      ? "Tamil Nadu"
      : null;

  return (
    <>
      <header className="header flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-nose text-md font-medium mb-0">
            {selectedStateLabel} Alfred Assistance
          </h2>
          <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full overflow-hidden flex items-center justify-center profile-icon hidden">
            <h5 className="text-nose font-bold text-xs mb-0 text-white">GM</h5>
          </div>
        </div>
        {/* <Dropdown menu={{ items }} className="cursor-pointer">
          <a onClick={(e) => e.preventDefault()}>
            <Space className="font-normal text-md text-nose">
              Visualization Examples Requested
              <DownOutlined />
            </Space>
          </a>
        </Dropdown> */}
        <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full overflow-hidden flex items-center justify-center profile-icon">
          {/* <img src={profileOne} className="w-full h-full object-cover" /> */}
          <h5 className="text-nose font-bold text-xs mb-0 text-white">U</h5>
        </div>
      </header>
    </>
  );
};
