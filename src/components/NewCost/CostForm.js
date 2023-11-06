import "./CostForm.css";
import { useState } from "react";

function CostForm(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(1);
  const [date, setDate] = useState("");


  const changeName = (e) => {
    setName(e.target.value);
  };
  const changePrice = (e) => {
    setPrice(e.target.value);
  };
  const changeDate = (e) => {
    setDate(e.target.value);
  };



  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      name: name,
      price: price,
      date: new Date(date),
    };

    props.onSaveCostData(costData);

    setName("");
    setPrice(1);
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="costForm_items">
        <div className="costForm_item">
          <label className="costItem_Name">Название</label>
          <input
            className="costItem_Input"
            type="text"
            placeholder="Введите название"
            onChange={changeName}
            value={name}
          />
        </div>
        <div className="costForm_item">
          <label className="costItem_Name">Сумма</label>
          <input
            className="costItem_Input"
            type="number"
            min="1"
            placeholder="Введите сумму"
            onChange={changePrice}
            value={price}
          />
        </div>
        <div className="costForm_item">
          <label className="costItem_Name">Дата</label>
          <input
            className="costItem_Input"
            type="date"
            min="2023-01-01"
            placeholder="Введите дату"
            onChange={changeDate}
            value={date}
          />
        </div>
        <div className="costForm_submit">
          <button type="submit">Добавить расход</button>
        </div>
      </div>
    </form>
  );
}

export default CostForm;
