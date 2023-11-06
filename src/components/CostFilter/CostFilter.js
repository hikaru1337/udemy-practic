import './CostFilter.css';

function CostFilter(props) {

  const uniqueYears = [ "All" ];
  props.items.forEach(item => {
    const year = item.date.getFullYear();
    if (!uniqueYears.includes(year)) {
      uniqueYears.push(year);
    }
  });
  
  uniqueYears.sort((a, b) => b - a);

  const yearChangeHandler = (event) => {
    props.onChangeYear(event.target.value)
  }

  return (
    <div className="CostFilter-container">
      <h2>Список расходов</h2>
      <select onChange={yearChangeHandler} className='CostFilter-select'>
        {
          uniqueYears.map((item, Index) => (
            <option key={Index}>{item}</option>
          ))
        }
      </select>
    </div>
  );
}

export default CostFilter;
