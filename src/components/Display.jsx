import React from "react";
import Item from "./Item";

const Display = (props) => {
  return (
    <div className="">
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
    </div>
  );
};

export default Display;
