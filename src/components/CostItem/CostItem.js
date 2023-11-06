import "./CostItem.css";
import { useState } from "react";

function CostItem({ props }) {

  const [name, setName] = useState(props.name)

  const ChangeClickHandler = () => {
    setName("зяблик");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="product-name">{name}</div>
        <div className="price-name">{props.price}$</div>
      </div>
      <div className="row">
      <div className="date-name">{props.date.toLocaleDateString()}</div>
      <button onClick={ChangeClickHandler} className="button">123</button>
      </div>
    </div>
  );
}

export default CostItem;
