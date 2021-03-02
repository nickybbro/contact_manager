import React from "react";
import { Input, Row } from "antd";
const { TextArea } = Input;

export const EnterEmail = ({ listOfEmails }) => {
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <>
      <Row>Email</Row>
      <Row>
        <Input
          placeholder="Enter Email"
          style={{
            height: 35,
            width: "100%",
            fontSize: 15,
          }}
          allowClear
          onChange={onChange}
        />
      </Row>
    </>
  );
};
