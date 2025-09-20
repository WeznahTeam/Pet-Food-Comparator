import {FoodForm} from "./components/FoodForm/FoodForm";
import {useState} from "react";
import type {Food} from "./types/Food";
import {FoodCard} from "./components/FoodCard/FoodCard";
import {useAppDispatch, useAppSelector} from './hooks';
import {test, type ValidationsState} from "./state/slices";

function App() {
  const [food, setFood] = useState<Food | undefined>()

  // Example get state
  const validations =
    useAppSelector((state: { validations: ValidationsState }): ValidationsState => state.validations)

  // Example dispatch event
  const dispatch = useAppDispatch();

  return (
    <>
      <FoodForm registerFood={setFood}/>

      <FoodCard food={food}/>

      <p>{JSON.stringify(validations)}</p>

      <button onClick={() => dispatch(test())}>Test Dispatch State</button>
    </>
  )
}

export default App
