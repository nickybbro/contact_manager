import React from "react";
import { Row, Col, Button, Typography, Tag } from "antd";
import { EditOutlined } from "@ant-design/icons";
const { Title, Link, Text } = Typography;
export const Feed = ({ people, photos }) => {
  return (
    <>
      {people.map((person, i) => (
        <ContactCard
          name={person.name.first + " " + person.name.last}
          company={person.company}
          email={person.email}
          photo={photos[i]}
          description={person.about}
          isActive={person.isActive}
          image={person.image}
        />
      ))}
    </>
  );
};

const ContactCard = ({
  name,
  company,
  email,
  description,
  isActive,
  photo,
}) => {
  return (
    <div className="contact-card">
      <Row>
        <Col className="photo-container" span={4}>
          <div
            className="contact-photo"
            alt="Profile"
            style={{ backgroundImage: `url(${photo})` }}
          />
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
              <Tag color={isActive ? "green" : "red"}>
                {isActive ? "Yes" : "No"}
              </Tag>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
