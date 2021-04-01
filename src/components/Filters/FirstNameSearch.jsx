import React, { useState } from "react";
import { AutoComplete, Option } from "antd";

export const NameSearch = ({ setPeople, unfilteredPeople, nameType }) => {
  const [options, setOptions] = useState(
    unfilteredPeople.map((o) => {
      return { value: o.name[nameType] };
    })
  );
  const onChange = (value) => {
    if (!value) setPeople(unfilteredPeople);
  };
  const filterPeople = (value) => {
    if (value) {
      const filteredPeople = unfilteredPeople.filter(
        (p) => p.name[nameType] === value
      );
      setPeople(filteredPeople);
    }
  };

  return (
    <AutoComplete
      placeholder={nameType}
      style={{ width: "100%" }}
      options={options}
      onSelect={(value) => filterPeople(value)}
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      onChange={(value) => onChange(value)}
      allowClear
    />
  );
};
