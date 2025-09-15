import {FoodForm} from "./components/FoodForm/FoodForm";
import {useState} from "react";
import type {Food} from "./types/Food/Food";
import {FoodCard} from "./components/FoodCard/FoodCard";

function App() {
    const [food, setFood] = useState<Food | undefined>()

    return (
        <>
            <FoodForm registerFood={setFood}/>

            <FoodCard food={food}/>
        </>
    )
}

export default App
