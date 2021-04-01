import React, { useState } from "react";
import { Row, Button, Radio } from "antd";
export const IsActiveSelect = ({ people }) => {
  const [selectedValue, setSelectedValue] = useState("Yes");
  const buttonChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <Row>Is Active</Row>
      <Row>
        <Radio.Group value={selectedValue} onChange={(e) => buttonChange(e)}>
          <Radio.Button value="Yes">Yes</Radio.Button>
          <Radio.Button value="No">No</Radio.Button>
        </Radio.Group>
      </Row>
    </>
  );
};
