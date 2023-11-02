import React from "react";

const ListItem = ({ item }) => {
  return (
    <>
      <tr>
        {Object.values(item).map((keyAndValue) => (
          <td>{JSON.stringify(keyAndValue)}</td>
        ))}
      </tr>
    </>
  );
};

export default ListItem;
