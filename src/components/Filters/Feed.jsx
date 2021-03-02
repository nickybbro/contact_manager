import React from "react";
import { Row, Col, Button, Radio, Typography } from "antd";
var zacBrooks = document.createElement("img");
zacBrooks.src = "Bruce_Banner_(Earth-TRN746)_from_Team_Thor_001 1.png";
const { Title, Link, Text } = Typography;
export const Feed = () => {
  return (
    <div className="contact-card">
      <Row>
        <Col span={4}></Col>
        <Col span={10}>
          <Row>
            <Title>Zac Brooks</Title>
          </Row>
          <Row>
            <Title level={5}>COMPANY HERE</Title>
          </Row>
          <Row>
            <Text style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud e
            </Text>
          </Row>
          <Row>
            <Col span={8}>
              <div>
                <Text style={{ float: "left" }}>Email</Text>
              </div>
            </Col>
            <Col span={16}>
              <div>
                <Link style={{ float: "right" }}>
                  Nickslackerpacker@thehouse.com
                </Link>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={4} />
        <Col span={6}>
          <Row>
            <Col span={12}>
              <Button type="primary" shape="round" size={"10px"}>
                View Details
              </Button>
            </Col>
            <Col span={12}>
              <Button type="primary" shape="round" size={"10px"}>
                View Details
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
