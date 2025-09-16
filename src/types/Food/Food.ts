import type {Component} from "./Component";
import type {Additive} from "./Additive";

export type FoodType = 'kibble' | 'wetFood' | 'treat'

export type Food = {
    name: string;
    price: number;
    currency: string;
    type: FoodType
    composition: Array<Component>
    additives: Array<Additive>
}
