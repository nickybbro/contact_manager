import React, { useState } from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Row,
  Col,
  Input,
  Space,
  Button,
  Typography,
  Dropdown,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { EyeColor } from "./Filters/EyeColor";
import { AgeSelect } from "./Filters/AgeSelect";
import { CompanySelect } from "./Filters/CompanySelect";
import siteLogo from "../assets/image/logo.svg";
import { EnterEmail } from "./Filters/EnterEmail";
import { testData } from "../utility/dummydata";
import { Feed } from "./Filters/Feed";
import { IsActiveSelect } from "./Filters/IsActiveSelect";
import { HeaderControls } from "./FriendList/HeaderControls";
const { Header, Content } = Layout;
const { Search } = Input;
const { Title } = Typography;

const onSearch = (value) => console.log(value);

export const HomePage = () => {
  const [people, setPeople] = useState(testData);
  return (
    <Layout style={{ height: "100vh" }}>
      <Row className="find-friends">
        <img src={siteLogo} />
      </Row>
      <Row className="h-100">
        <Col style={{ backgroundColor: "white" }} span={6}>
          <Space size={25} className="s-text" direction="vertical">
            <Search
              className="search"
              placeholder="Search for your friends"
              onSearch={onSearch}
            />
            <Row>FILTER FRIENDS BY:</Row>
            <Row>Name:</Row>
            <Row>
              <Col span={12}>
                <Input placeholder="First" onChange={onSearch} />
              </Col>
              <Col span={12}>
                <Input placeholder="Last" onChange={onSearch} />
              </Col>
            </Row>
            <EyeColor />
            <CompanySelect people={people} />
            <AgeSelect />
            <EnterEmail />
            <IsActiveSelect />
          </Space>
        </Col>
        <Col className="content-container" span={18}>
          <HeaderControls />
          <Feed />
        </Col>
      </Row>
    </Layout>
  );
};
