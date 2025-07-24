import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form";
import Display from "./components/Display";
// src/App.jsx

const App = () => {
  const [items, setItems] = useState([]);
  const addItem = (newItem) => {
    setItems((prevState) => [...prevState, newItem]);
  };
  const removeItem = (removeIdx) => {
    setItems((prevState) => prevState.filter((item, idx) => idx !== removeIdx));
  };
  return (
    <>
      <Form onAdd={addItem}></Form> {/*passing function to child*/}
      <Display items={items} onRemove={removeItem}></Display> {/*passing data to child*/}
    </>
  );
};

export default App;
