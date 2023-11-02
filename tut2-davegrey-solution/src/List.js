import React from "react";
import ListItem from "./ListItem";

const List = ({ items }) => {
  return (
    <table>
      {items.map((item) => (
        <ListItem item={item}></ListItem>
      ))}
    </table>
  );
};

export default List;
