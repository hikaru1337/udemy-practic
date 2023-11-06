import CostForm from "./CostForm"

function NewCost(props) {

    const saveCostDataHandler = (inputCostData) => {
        props.onSaveCostData(inputCostData)
    }

    return (
        <div>
            <CostForm onSaveCostData={saveCostDataHandler} />
        </div>
    )
}

export default NewCost