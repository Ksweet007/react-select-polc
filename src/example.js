import React from "react";
import Select from "react-select";
import { groupedPeople } from "./docs/data";

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};
const labelStyles = {
  display: "flex"
};
const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center"
};
const dot = {
  height: "10px",
  width: "10px",
  backgroundColor: "green",
  borderRadius: "2em",
  marginRight: "10px"
};
const filterOptions = (candidate, input) => {
  if (input) {
    console.log(input);
    console.log(candidate);
  }
  return true;
};
function buildList(shouldBuildList, count) {
  if (!shouldBuildList) {
    return groupedPeople;
  }
  let retList = [];
  for (var i = 0; i < count; i++) {
    let group = {
      label: `Connie Allen ${i}`,
      options: [
        {
          value: `connie${i}`,
          label: "#123, 168612 - Perform Design LTD",
          isFixed: true
        }
      ]
    };
    retList.push(group);
  }
  return retList;
}

const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

const formatOptionLabel = (data) => (
  <div style={labelStyles}>
    <span style={dot}></span>
    <span>{data.label}</span>
  </div>
);

export default () => (
  <Select
    //options={groupedPeople}
    options={buildList(false, 100)}
    formatGroupLabel={formatGroupLabel}
    formatOptionLabel={formatOptionLabel}
    filterOption={filterOptions}
  />
);
