import React, {useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Amazon from "./components/amazon";
import Cart from "./components/cart";

function App() {
  const [show, setShow] = useState(true);
  const [card, setCard] = useState([]);

  const handleClick = (item) => {
    if (card.indexOf(item) !== -1) return;
    setCard([...card, item]);
  };

  const handleChange = (item, d) => {
    const ind = card.indexOf(item);
    const arr = card;
    arr[ind].amount += d;
    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCard([...arr]);
  };

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={card.length} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart card={card} setCard={setCard} handleChange={handleChange} />
      )}
    </React.Fragment>
  );
}

export default App;
