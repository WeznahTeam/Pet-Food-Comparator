import {FoodForm} from "./components/FoodForm/FoodForm";

function App() {
    return (
        <>
            <FoodForm registerFood={newFood => console.log(newFood)}/>
        </>
    )
}

export default App
