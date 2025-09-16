import {array, number, object, type ObjectSchema, string} from "yup";
import type {Additive, Component, Food, FoodType} from "../../types/Food";

const FoodKinds: Array<FoodType> = ['kibble', 'wetFood', 'treat']

export const ComponentValidation: ObjectSchema<Component> = object({
    name: string().required().max(150).min(1),
    quantity: number().required().min(1).max(100)
})

export const AdditiveValidation: ObjectSchema<Additive> = object({
    name: string().required().max(150).min(1),
    quantity: number().required()
})

export const FoodValidation: ObjectSchema<Food> = object({
    name: string().required().max(150).min(1),
    price: number().required().default(0),
    currency: string().required().default('€'),
    type: string().oneOf(FoodKinds).required(),
    composition: array().of(ComponentValidation).required().min(0),
    additives: array().of(AdditiveValidation).required().min(0)
})
