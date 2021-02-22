import React from "react";
import { Row, Form, Select } from "antd";
const { Option } = Select;
export const EyeColor = () => {
  return (
    <>
      <Row className="s-text">Eye Color</Row>
      <Row>
        <Form.Item className="s-text search">
          <Select placeholder="Select An Eye Color">
            <Option value="Hazel">Hazel</Option>
            <Option value="Green">Green</Option>
            <Option value="Blue">Blue</Option>
            <Option value="Brown">Brown</Option>
          </Select>
        </Form.Item>
      </Row>
    </>
  );
};
