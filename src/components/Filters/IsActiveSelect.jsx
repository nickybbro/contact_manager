import React from "react";
import { Row, Button } from "antd";
export const IsActiveSelect = ({ people }) => {
  return (
    <>
      <Row>Is Active</Row>
      <Row>
        <Button type="primary" size={24}>
          True
        </Button>
        <Button size={24}>False</Button>
      </Row>
    </>
  );
};
