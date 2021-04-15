import React, { useState } from "react";
import { Layout, Row, Col, Input, Space } from "antd";
import { EyeColor } from "./Filters/EyeColor";
import { AgeSelect } from "./Filters/AgeSelect";
import { CompanySelect } from "./Filters/CompanySelect";
import siteLogo from "../assets/image/logo.svg";
import { EnterEmail } from "./Filters/EnterEmail";
import { testData } from "../utility/dummydata";
import { Feed } from "./Filters/Feed";
import { IsActiveSelect } from "./Filters/IsActiveSelect";
import { HeaderControls } from "./FriendList/HeaderControls";
import { NameSearch } from "./Filters/FirstNameSearch";
const { Search } = Input;

const onSearch = (value) => console.log(value);

export const HomePage = () => {
  const [unfilteredPeople, setUnfilteredPeople] = useState(testData);
  const [people, setPeople] = useState(testData);

  return (
    <Layout style={{ height: "100vh" }}>
      <Row className="find-friends">
        <img alt="Site Logo" src={siteLogo} />
      </Row>
      <Row className="h-100">
        <Col style={{ backgroundColor: "white" }} span={6}>
          <Space size={25} className="s-text" direction="vertical">
            <Search setPeople={setPeople} unfilteredPeople={unfilteredPeople} />
            <Row>FILTER FRIENDS BY:</Row>
            <Row>Name:</Row>
            <Row>
              <Col span={12}>
                <NameSearch
                  setPeople={setPeople}
                  unfilteredPeople={unfilteredPeople}
                  nameType="first"
                />
              </Col>
              <Col span={12}>
                <NameSearch
                  setPeople={setPeople}
                  unfilteredPeople={unfilteredPeople}
                  nameType="last"
                />
              </Col>
            </Row>
            <EyeColor
              people={people}
              setPeople={setPeople}
              unfilteredPeople={unfilteredPeople}
            />
            <CompanySelect
              people={people}
              setPeople={setPeople}
              unfilteredPeople={unfilteredPeople}
            />

            <AgeSelect
              unfilteredPeople={unfilteredPeople}
              people={people}
              setPeople={setPeople}
            />
            <EnterEmail
              people={people}
              setPeople={setPeople}
              unfilteredPeople={unfilteredPeople}
            />
            <IsActiveSelect
              unfilteredPeople={unfilteredPeople}
              people={people}
              setPeople={setPeople}
            />
          </Space>
        </Col>
        <Col className="content-container" span={18}>
          <HeaderControls />
          <Feed people={people} />
        </Col>
      </Row>
    </Layout>
  );
};
