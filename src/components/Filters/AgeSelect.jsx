import React, { useState } from "react";
import { Slider, InputNumber, Row, Col } from "antd";

// Created a component to filter people by a minimum age
export const AgeSelect = ({unfilteredPeople,setPeople}) => {

// manages the minimum age that the user puts 
  const [inputValue, setInputValue] = useState(1);
//onchange functino for the inputs
  const onChange = (value) => {
  
    if (value) {
      //made a funtion to filter out the people that are above the age of the input
      const filteredPeople = unfilteredPeople.filter(
        (p) => p.age >= value
      )
      // updated our input state variable so the slider and the textbox both update correctly
      setInputValue(value)
      // updated our array to the people filtered 
      setPeople(filteredPeople)
    }

  };
  

  return (
    <>
      <Row>Minimium Age</Row>
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={60}
            onChange={(value) => onChange(value)}
            value={typeof inputValue === "number" ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={60}
            style={{ margin: "0 16px" }}
            value={inputValue}
            onChange={(value) => onChange(value)}
          />
        </Col>
      </Row>
    </>
  );
};
