import { Button, Form, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

export const LoginForm = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    localStorage.setItem("_token", "frontendToken");
    localStorage.setItem("username", values?.username);
    navigate(`/?selected-state=${values?.assistance}`);
  };

  return (
    <div className="flex items-center justify-center h-screen min-h-[550px] bg-cover bg-no-repeat bg-center auth-section overflow-y-auto px-3 px-md-0">
      <div className="relative auth-card md:max-w-[500px] w-full min-h-[300px] md:min-h-[400px] px-0 md:px-0 bg-white">
        <Form
          name="loginForm"
          layout="vertical"
          onFinish={onFinish}
          className="shadow-lg rounded-lg w-full h-full min-h-[inherit] bg-[#ffffff21] border border-x-2 border-y-2 border-[#ffffff1a] px-[15px] py-[15px] md:px-[50px] md:py-[50px] flex items-center flex-col justify-center"
        >
          <h1 className="text-center text-[18px] 2xl:text-[24px] font-bold text-white tracking-widest mb-6">
            Alfred Assistance
          </h1>
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: "Enter username" }]}
            className="w-full"
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="assistance"
            label="Select Assistance"
            rules={[{ required: true, message: "Select an option" }]}
            className="w-full"
          >
            <Select placeholder="Select an Assistance">
              <Option value="up">Uttar Pradesh Alfred Assistance</Option>
              <Option value="delhi">Delhi Alfred Assistance</Option>
            </Select>
          </Form.Item>

          <Form.Item className="w-full">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full min-h-[45px] text-lg font-medium tracking-normal"
            >
              Get Started
            </Button>
          </Form.Item>
        </Form>
        {/* <div className="md:w-[150px] md:h-[150px] absolute rounded-full -z-10 shape-one"></div>
        <div className="md:w-[150px] md:h-[150px] absolute rounded-full -z-10 shape-two"></div> */}
      </div>
    </div>
  );
};
