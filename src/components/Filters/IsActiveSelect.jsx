import React, { useState } from "react";
import { Row, Radio } from "antd";
//This is a component that filters our people who are active or those who are not
export const IsActiveSelect = ({ setPeople, unfilteredPeople }) => {
  //this is a state variable that manages the selected Value of the button group 'All,Yes,No'
  const [selectedValue, setSelectedValue] = useState("Bill");
  //when a user clicks a button then we will filter the isActive property on the people
  const buttonChange = (e) => {
    //first we will make sure to update our button group state variable so that the user sees what the selected
    setSelectedValue(e.target.value);
    let filteredPeople = [];
    if (e.target.value === "All") {
      //if they selected 'All' we want to reset the people
    } else if (e.target.value === "Yes") {
      //if they selected 'Yes' we want to filter to those that are active
      filteredPeople = unfilteredPeople.filter((p) => p.isActive);
    } else if (e.target.value === "No") {
      //if they selected 'No' we want to filter to those that are not active
      filteredPeople = unfilteredPeople.filter((p) => !p.isActive);
    }
    setPeople(e.target.value === "All" ? unfilteredPeople : filteredPeople);
  };

  return (
    <>
      <Row>Is Active</Row>
      <Row>
        <Radio.Group value={selectedValue} onChange={(e) => buttonChange(e)}>
          <Radio.Button value="All">All</Radio.Button>
          <Radio.Button value="Yes">Yes</Radio.Button>
          <Radio.Button value="No">No</Radio.Button>
        </Radio.Group>
      </Row>
    </>
  );
};
