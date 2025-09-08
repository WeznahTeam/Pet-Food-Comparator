import {Component} from "./Component";
import {Additive} from "./Additive";

export type Food = {
    name: string;
    price: number;
    currency: string;
    type: 'Kibble' | 'WetFood' | 'Treat'
    composition: Array<Component>
    additives: Array<Additive>
}
