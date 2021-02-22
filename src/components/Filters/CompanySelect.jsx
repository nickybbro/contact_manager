import React from "react";
import { Row, Form, Select } from "antd";
const { Option } = Select;
export const CompanySelect = ({listOfCompanies}) => {
  return (
    <>
      <Row className="s-text">Company</Row>
      <Row>
        <Form.Item className="s-text search">
          <Select placeholder="Select a Company">
            <Option value="VIDTO">VIDTO</Option>
            <Option value="GLUID">GLUID</Option>
            <Option value="GEOFARM">GEOFARM</Option>
            <Option value="OPTICOM">OPTICOM</Option>
            <Option value="RODEOMAD">RODEOMAD</Option>
            <Option value="RETROTEX">RETROTEX</Option>
            <Option value="INRT">INRT</Option>
            <Option value="BEDLAM">BEDLAM</Option>
          </Select>
        </Form.Item>
      </Row>
    </>
  );
};
