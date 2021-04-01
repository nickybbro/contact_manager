import React from "react";
import { Row, Col, Button, Typography, Tag } from "antd";
import { EditOutlined } from "@ant-design/icons";
import profilePicture from "../../assets/image/pro_pic.png";
const { Title, Link, Text } = Typography;
export const Feed = ({ people }) => {
  return (
    <>
      {people.map((person) => (
        <ContactCard
          name={person.name.first + " " + person.name.last}
          company={person.company}
          email={person.email}
          description={person.about}
          isActive={person.isActive}
        />
      ))}
    </>
  );
};

const ContactCard = ({ name, company, email, description, isActive }) => {
  return (
    <div className="contact-card">
      <Row>
        <Col span={4}>
          <img alt="Profile" src={profilePicture} />
        </Col>
        <Col span={10}>
          <Row>
            <Title>{name}</Title>
          </Row>
          <Row>
            <Title level={5}>{company}</Title>
          </Row>
          <Row>
            <Text style={{ textAlign: "left" }}>{description}</Text>
          </Row>
          <Row>
            <Col span={8}>
              <div>
                <Text style={{ float: "left" }}>Email:</Text>
              </div>
            </Col>
            <Col span={16}>
              <div>
                <Link style={{ float: "right" }}>{email}</Link>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={4} />
        <Col className="vertical-flex-sb" span={6}>
          <Row>
            <Col span={12}>
              <Button
                icon={<EditOutlined />}
                type="primary"
                shape="round"
                size={"10px"}
              >
                Edit Contact Info
              </Button>
            </Col>
            <Col span={12}>
              <Button shape="round" size={"10px"}>
                View Details
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Title level={5}>{isActive} </Title>
            </Col>
            <Col span={12}>
              <Tag color="green">{isActive ? "Yes" : "No"}</Tag>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
