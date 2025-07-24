import React from "react";
import Item from "./Item";

const Display = (props) => {
  return (
    <>
      {props.items.map((item, idx) => (
        <Item
          key={idx}
          id={idx}
          item={item.item}
          price={item.price}
          date={item.date}
          onRemove={props.onRemove}
        ></Item>
      ))}
    </>
  );
};

export default Display;
