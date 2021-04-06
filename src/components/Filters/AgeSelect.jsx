import React, { useState } from "react";
import { Slider, InputNumber, Row, Col } from "antd";

export const AgeSelect = (setPeople, unfilteredPeople) => {
  const [inputValue, setInputValue] = useState(1);

  const onChange = (value) => {
    setInputValue
    //use .filter() to filter down to ages above the value
    //setPeople to the filter results
  };

  return (
    <>
      <Row>Age</Row>
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={60}
            onChange={(value) => onChange(value)}
            value={typeof inputValue === "number" ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={60}
            style={{ margin: "0 16px" }}
            value={inputValue}
            onChange={(value) => onChange(value)}
          />
        </Col>
      </Row>
    </>
  );
};
