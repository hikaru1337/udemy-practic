import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import CostFilter from "./components/CostFilter/CostFilter";
import { useState } from "react";

const items = [
  {
    id: 0,
    name: "MacBook",
    date: new Date(2023, 9, 5),
    price: 15000,
  },
  {
    id: 1,
    name: "Jacket",
    date: new Date(2023, 9, 6),
    price: 3400,
  },
  {
    id: 2,
    name: "Iphone",
    date: new Date(2023, 9, 5),
    price: 1500,
  },
  {
    id: 3,
    name: "test",
    date: new Date(2012, 9, 5),
    price: 15200,
  },
]


function App() {

  const [costs, setCosts] = useState(items)

  const saveCostDataHandler = (inputCostData) => {
    const maxId = Math.max(...costs.map(obj => obj.id));
    inputCostData.id = maxId + 1;

    setCosts(prevCosts => {
      return [inputCostData, ...prevCosts];
    })

    console.log(inputCostData)
  }


  return (
    <>
      <h1>Учёт расходов</h1>
      <NewCost onSaveCostData={saveCostDataHandler}/>
      <Costs items={costs}/>
    </>
  );
}

export default App;

/* package.json

"eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },

*/