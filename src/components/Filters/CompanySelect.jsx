import React from "react";
import { Row, Form, Select } from "antd";
const { Option } = Select;
export const CompanySelect = ({ people }) => {
  //  <CompanySelect count={20} bestPerson='Angela'people={people} />
  //here, create an array that has all of the unique 'Company' Values on people.
  const filterOptions = [];
  return (
    <>
      <Row>Company</Row>
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
