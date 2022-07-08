import React from "react";
import { useState } from "react";

const ItemCount = (props) => {
  const [num, setNum] = useState(props.initial);

  const stock = props.stock;

  const IncrementarItem = () => {
    num < stock ? setNum(num + 1) : alert("No hay más stock");
  };

  const SacarItem = () => {
    num > 0 ? setNum(num - 1) : alert("No puedes tener menos de 0!");
  };

  return (
    <div className="item-count">
      <button onClick={SacarItem}>-</button>
      <p>{num}</p>
      <button onClick={IncrementarItem}>+</button>
    </div>
  );
};

export default ItemCount;
