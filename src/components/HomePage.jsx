import React from "react";
import { Layout, Menu, Breadcrumb, Row, Col, Input, Space } from "antd";
import { EyeColor } from "./Filters/EyeColor";
import { AgeSelect } from "./Filters/AgeSelect";
const { Header, Content } = Layout;
const { Search } = Input;

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
          <EyeColor />
          <CompanySelect />
          <AgeSelect />
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
