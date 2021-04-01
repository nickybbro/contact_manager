import React, { useState } from "react";
import { Row, Form, Select } from "antd";
const { Option } = Select;
export const CompanySelect = ({ people, unfilteredPeople, setPeople }) => {
  const [options] = useState([
    ...new Set(unfilteredPeople.map((o) => o.company)),
  ]);
  const filterPeople = (value) => {
    if (value) {
      const filteredPeople = unfilteredPeople.filter(
        (p) => p.company === value
      );
      setPeople(filteredPeople);
    }
  };
  const resetPeople = () => {
    setPeople(unfilteredPeople);
  };

  return (
    <>
      <Row>Company</Row>
      <Row>
        <Form.Item className="s-text search">
          <Select
            onChange={(value) => filterPeople(value)}
            placeholder="Select a Company"
            allowClear
            onClear={() => resetPeople()}
          >
            {options.map((company) => (
              <Option value={company}>{company}</Option>
            ))}
          </Select>
        </Form.Item>
      </Row>
    </>
  );
};
