import React, { useState } from "react";
import { Row, Form, Select } from "antd";
const { Option } = Select;
export const EyeColor = ({ people, setPeople, unfilteredPeople }) => {
  const [options] = useState([
    ...new Set(unfilteredPeople.map((o) => o.eyeColor)),
  ]);
  const filterPeople = (value) => {
    if (value) {
      const filteredPeople = unfilteredPeople.filter(
        (p) => p.eyeColor === value
      );
      setPeople(filteredPeople);
    }
  };
  const resetPeople = () => {
    setPeople(unfilteredPeople);
  };
  return (
    <>
      <Row>Eye Color</Row>
      <Row>
        <Form.Item className="s-text search">
          <Select
            onChange={(value) => filterPeople(value)}
            placeholder="Select An Eye Color"
            allowClear
            onClear={() => resetPeople()}
          >
            {options.map((eyeColor, i) => (
              <Option key={i} value={eyeColor}>
                {eyeColor}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Row>
    </>
  );
};
