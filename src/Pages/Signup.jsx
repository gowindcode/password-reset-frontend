import React, { useState } from "react";
import { Row, Col, Form, Input, Button, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../global";

function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  //on finsigh get all inut details and using axios.post to send the datas to backend
  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post(`${API}/signup`, values);
      setLoading(false);
      if (response.data.message === "Signup successful.") {
        message.success(response.data.message);
        navigate("/login");
      } else {
        console.error(
          "Error Message: Maybe Email or phone number already used."
        );
        message.error(response.data.message);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      message.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="signupDiv">
      <div className="innerSignup">
        <p className="register">Signup/Register</p>
        <div>
          <Row>
            <Col lg={8} xs={22} className="dietRegForm">
              <Form onFinish={onFinish}>
                <Form.Item
                  name="firstName"
                  label="First Name"
                  rules={[
                    { required: true, message: "Please enter your first name" },
                  ]}
                >
                  <Input id="firstName" placeholder="Enter your first name" />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  label="Last Name"
                  rules={[
                    { required: true, message: "Please enter your last name" },
                  ]}
                >
                  <Input id="lastName" placeholder="Enter your last name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                  ]}
                >
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
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
                    placeholder="Enter your password"
                  />
                </Form.Item>
                <Form.Item
                  name="mobile"
                  label="Mobile Number"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your mobile number",
                    },
                  ]}
                >
                  <Input
                    id="mobile"
                    type="number"
                    placeholder="Enter your mobile number"
                  />
                </Form.Item>
                <Form.Item
                  name="address"
                  label="Address"
                  rules={[
                    { required: true, message: "Please enter your address" },
                  ]}
                >
                  <Input id="address" placeholder="Enter your address" />
                </Form.Item>
                <div className="signBTN-DIV">
                  <Button
                    className="BTN-SIGNUP"
                    htmlType="submit"
                    loading={loading}
                  >
                    Signup
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
        <div className="validDiv">
          <p>*Please enter valid details.</p>
          <p>Already Registred, Please <a href="/login">login</a></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;

// ------------------------------------------------------------------




// ----------------------------------------------
// import React from 'react';

// function Signup() {
//     return (
//         <div className='signup-page'>
//             <h1>Signup Page</h1>
//         </div>
        
//     );
// };

// export default Signup;