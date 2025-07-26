import React from "react";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Label from "./Label";

const Form = (props) => {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    const newItem = {
      item,
      price,
      date,
    };
    props.onAdd(newItem); //lifting data to App
    //clearing form
    setItem("");
    setPrice("");
    setDate("");
  };
  return (
    <div className="form-container">
      <div className="form-row">
        <Label htmlFor="item">
          Item:
        </Label>
        <Input
          id="item"
          type="text"
          value={item}
          onChange={(event) => setItem(event.target.value)}
        ></Input>
      </div>
      <div className="form-row">
      <Label htmlFor="price">Price:</Label>
      <Input
        id="price"
        type="text"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      ></Input>
      </div>
       <div className="form-row">
      <Label htmlFor="date">Date:</Label>
      <Input
        id="date"
        type="text"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      ></Input>
      </div>
      <div className="submitBtn">
      <Button className="submit col-sm-4" type="button" onClick={handleSubmit}>
        Submit
      </Button>
      </div>
    </div>
  );
};

export default Form;
