import React from "react";
import Label from "./Label";
import Button from "./Button";

const Item = (props) => {
  const handleRemove = () => {
    props.onRemove(props.id);
  };

  return (
    <div className="item-row">
      <Label htmlFor={`item-${props.id}`}>Item:</Label>
      {props.item}
      <Label htmlFor={`price-${props.id}`}>Price:</Label>
      {props.price}
      <Label htmlFor={`date-${props.id}`}>Date:</Label>
      {props.date}
      <Button className="onRemove" onClick={handleRemove}>
        Remove
      </Button>
    </div>
  );
};

export default Item;
