import React from "react";
import { Row, Col, Typography, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
const { Title } = Typography;
export const HeaderControls = () => {
  return (
    <Row className="flex">
      <Col className="grey">
        <Title level={5}>Friend List</Title>
      </Col>
      <Col
        style={{
          padding: "0 20px 20px",
        }}
      >
        <Dropdown>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Sort By <DownOutlined />
          </a>
        </Dropdown>
      </Col>
    </Row>
  );
};
