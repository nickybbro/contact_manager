         import React, { useState } from "react"
         import { Input, Space } from "antd"
         
         export const Search = ({setPeople, unfilteredPeople}) => {
         const [options, setOptions] = useState(
         unfilteredPeople.map((o) => {
        return { value };
    })
  );
  const onSearch = (value) => {
    if (!value) setPeople(unfilteredPeople);
  };
  const filterPeople = (value) => {
    if (value) {
      const filteredPeople = unfilteredPeople.filter(
        (p) => p.name === value
      );
      setOptions(filteredPeople);
      console.log(value)
    }
  }
            <Search
              className="search"
              placeholder="Search for your friends"
              onSearch={onSearch}
            />