import { Button } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./Header.css";
import { getFirstAlphabetOfUsername } from "../../utils";

export const Header = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedState = searchParams?.get("selected-state");
  const selectedStateLabel =
    selectedState == "delhi"
      ? "Delhi"
      : selectedState == "tn"
      ? "Tamil Nadu"
      : null;

  const handleLogout = () => {
    localStorage.removeItem("_token");
    navigate("/login");
  };

  return (
    <>
      <header className="header flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-nose text-sm md:text-md font-medium mb-0">
            {selectedStateLabel} Alfred Assistance
          </h2>
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden flex items-center justify-center profile-icon hidden">
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
        <div className="flex gap-2 md:gap-4">
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden flex items-center justify-center profile-icon">
            {/* <img src={profileOne} className="w-full h-full object-cover" /> */}
            <h5 className="text-nose font-bold text-xs mb-0 text-white">
              {getFirstAlphabetOfUsername()}
            </h5>
          </div>

          <Button
            type="primary"
            className="btn btn-green-border"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </header>
    </>
  );
};
