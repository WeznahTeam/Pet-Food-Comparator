import {Component} from "./Component";
import {Additive} from "./Additive";

export type Food = {
    name: string;
    price: number;
    currency: string;
    type: 'kibble' | 'wetFood' | 'treat'
    composition: Array<Component>
    additives: Array<Additive>
}
