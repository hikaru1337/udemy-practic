import CostItem from "../CostItem/CostItem";
import CostFilter from "../CostFilter/CostFilter";
import CostList from "../CostList/CostList";
import { useState } from "react";

function Costs(props) {
  const [selectedYear, setSelectedYear] = useState("All");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const FilteredItems = props.items
    .filter((item) => selectedYear === "All" || 
    item.date.getFullYear() == selectedYear);

/*  const RenderCostItem = () => {
    let ConstContent = <p>Список пуст. Давай шекели!!!</p>;

    if(FilteredItems.length) 
      ConstContent = FilteredItems.map((item) => 
        <CostItem key={item.id} props={item} />);

    return ConstContent;
  };*/


  return (
    <>
      <CostFilter items={props.items} onChangeYear={yearChangeHandler} />
      <CostList FilteredItems={FilteredItems}/>
    </>
  );
}

export default Costs;
