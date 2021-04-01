import React from "react";
import { Input, Row } from "antd";

export const EnterEmail = ({ people, setPeople, unfilteredPeople }) => {
  const onChange = (e) => {
    const searchQuery = e.target.value;
    if (searchQuery) {
      const filteredPeople = unfilteredPeople.filter(
        (p) => p.email === searchQuery
      );
      setPeople(filteredPeople);
    } else {
      setPeople(unfilteredPeople);
    }
  };

  return (
    <>
      <Row>Email</Row>
      <Row>
        <Input
          placeholder="Enter Email"
          style={{
            height: 35,
            width: "100%",
            fontSize: 15,
          }}
          allowClear
          onChange={onChange}
        />
      </Row>
    </>
  );
};
