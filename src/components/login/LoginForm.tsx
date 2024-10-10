import { Button, Col, Form, Row, Select } from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

export const LoginForm = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Selected:", values);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Row justify="center" className="w-full">
        <Col xs={22} sm={16} md={10} lg={8}>
          <div className="bg-white p-10 shadow-lg rounded-lg">
            <h1 className="text-center text-2xl font-bold mb-6">
              Alfred Assistance
            </h1>
            <Form
              name="loginForm"
              layout="vertical"
              onFinish={onFinish}
              className="space-y-4"
            >
              <Form.Item
                name="assistance"
                label="Select Assistance"
                rules={[
                  { required: true, message: "Please select an option!" },
                ]}
              >
                <Select placeholder="Select an Assistance">
                  <Option value="tamil-nadu">
                    Tamil Nadu Alfred Assistance
                  </Option>
                  <Option value="delhi">Delhi Alfred Assistance</Option>
                </Select>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full">
                  Get Started
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};
