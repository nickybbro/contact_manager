import React from "react";
import { testData } from "../utility/dummydata";
import {
  Layout,
  Menu,
  Breadcrumb,
  Row,
  Col,
  Input,
  Space,
  Form,
  Select,
  InputNumber,
  Slider,
} from "antd";
import {
  CheckSquareOutlined,
  LaptopOutlined,
  NotificationOutlined,
  AudioOutlined,
  UploadOutlined,
  InboxOutlined,
} from "@ant-design/icons";
class intergerStep extends React.Component {
  state = {
    inputValue: 1,
  };
}
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;
const { Option } = Select;
const { InputValue } = this.state;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const onSearch = (value) => console.log(value);

export const HomePage = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header className={"header"}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>

      <Row className="h-100">
        <Col style={{ backgroundColor: "white" }} span={6}>
          <Space direction="vertical">
            <Search
              className="search"
              placeholder="Search for your friends"
              onSearch={onSearch}
            />
          </Space>
          <Row className="center-left">FILTER FRIENDS BY:</Row>
          <Row className="s-text">Name:</Row>
          <Row className="center">
            <Search
              placeholder="First"
              onSearch={onSearch}
              style={{ width: 200 }}
            />
            <Search
              placeholder="Last"
              onSearch={onSearch}
              style={{ width: 200 }}
            />
          </Row>
          <Row className="s-text">Eye Color</Row>
          <Row>
            <Form.Item className="s-text search">
              <Select placeholder="Select An Eye Color">
                <Option value="Hazel">Hazel</Option>
                <Option value="Green">Green</Option>
                <Option value="Blue">Blue</Option>
                <Option value="Brown">Brown</Option>
              </Select>
            </Form.Item>
          </Row>
          <Row className="s-text">Company</Row>
          <Row>
            <Form.Item className="s-text search">
              <Select placeholder="Select a Company">
                <Option value="VIDTO">VIDTO</Option>
                <Option value="GLUID">GLUID</Option>
                <Option value="GEOFARM">GEOFARM</Option>
                <Option value="OPTICOM">OPTICOM</Option>
                <Option value="RODEOMAD">RODEOMAD</Option>
                <Option value="RETROTEX">RETROTEX</Option>
                <Option value="INRT">INRT</Option>
                <Option value="BEDLAM">BEDLAM</Option>
              </Select>
            </Form.Item>
          </Row>
          <Row className="s-text">Age</Row>
          <Row>
            <Col span={12}>
              <Slider
                min={1}
                max={20}
                onChange={this.onChange}
                value={typeof inputValue === "number" ? inputValue : 0}
              />
            </Col>
            <Col span={4}>
              <inputNumber
                min={1}
                max={20}
                style={{ margin: "0 16px" }}
                value={inputValue}
                onChange={this.onChange}
              />
            </Col>
          </Row>
        </Col>
        <Col span={18}>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </Col>
      </Row>
    </Layout>
  );
};
