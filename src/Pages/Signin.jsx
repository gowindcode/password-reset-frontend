import React, { useState } from "react";
import { Row, Col, Form, Input, Button, message, Spin } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../global";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // on finish values if match with back end data, allows to user login
  const onFinish = (values) => {
    setLoading(true);
    axios
      .post(`${API}/login`, values)
      .then((res) => {
        console.log(res);
        if (res.data.message) {
          message.success("Login Successful");
          localStorage.setItem("user_data", JSON.stringify(res.data));
          // handleLogin(); // Dispatch login action upon successful login
          navigate("/home");
        } else {
          message.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        message.error("An error occurred while signing up. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="logDiv">
      <div className="Innerlog-Div">
        <div className="signin">
          <p>Login/Signin</p>
        </div>
        <Row className="loginForm">
          <Col lg={8} xs={22}>
            <Form onFinish={onFinish}>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: "Please enter your email" }]}
              >
                <Input id="email" placeholder="enter your email" />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  { required: true, message: "Please enter your password" },
                ]}
              >
                <Input.Password
                  id="password"
                  placeholder="enter your password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
              <div className="LogBTNDiv">
                <Button htmlType="submit" className="logBtn"> Login
                  {/* {loading ? "Logging" && Spin : "Login" && !Spin} */}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>

    </div>
  );
}

export default Login;


// ----------------------------------------------------------------------

// import React from 'react';

// function Signin() {
//     return (
//         <div className='signIn-Div'>
//             <h1>Signin/Login Page</h1>
            
//             <p>Welcome to password RESET PAGE</p>
//         </div>
//     );
// };

// export default Signin;