import CostItem from "../CostItem/CostItem";

const CostList = (props) => {
  if (!props.FilteredItems.length) 
    return <p>Список пуст. Давай шекели!!!</p>

  return (
    <>
        {
        props.FilteredItems.map((item) => (
            <CostItem key={item.id} props={item} />
          ))
        }
    </>
  );
};

export default CostList;
