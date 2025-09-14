import {Button, FormControlLabel, Grid, Radio, RadioGroup} from "@mui/material";
import '../../i18n/i18n'
import {useTranslation} from "react-i18next";
import {ChangeEvent, useState} from "react";
import {FoodTypes} from "../../constants/constants";
import type {Additive, Component, Food} from "../../types";
import {FoodInputForm} from "./FoodInputForm";
import {CompositionForm} from "./CompositionForm";
import {AdditiveForm} from "./AdditivesForm";

export interface FoodFormProps {
    registerFood: (newFood: Food) => void
}

export function FoodForm(props: FoodFormProps): JSX.Element {
    const {registerFood} = props

    const {t} = useTranslation();

    const [name, setName] = useState('')

    const [price, setPrice] = useState('')

    const [type, setType] = useState<'kibble' | 'wetFood' | 'treat'>(FoodTypes[0])

    const [composition, setComposition] = useState<Array<Component>>([])

    const [additives, setAdditives] = useState<Array<Additive>>([])

    const foodSetters = {
        name: setName,
        price: setPrice,
        type: setType,
    }

    function onInputChange(event: ChangeEvent<any>) {
        foodSetters[event.target.name](event.target.value)
    }

    function onCompositionInputChange(event: ChangeEvent<any>, i: number) {
        setComposition(prev => {
            // Create new reference to trigger refresh
            const newComposition = [...prev]

            newComposition[i][event.target.name] = event.target.value

            return newComposition
        })
    }

    function onAdditivesInputChange(event: ChangeEvent<any>, i: number) {
        setAdditives(prev => {
            // Create new reference to trigger refresh
            const newAdditives = [...prev]

            newAdditives[i][event.target.name] = event.target.value

            return newAdditives
        })
    }

    function compileAndRegisterFood() {
        const newFood: Food = {
            name,
            price: Number.parseInt(price),
            currency: 'euro',
            type,
            composition: [],
            additives: []
        }

        registerFood(newFood)
    }

    return (
        <Grid
            container
            direction='column'
            spacing={1}
            height='100%'
            width='100%'
            justifyContent='center'
            alignItems='center'
        >
            <h2>{t($ => $.FoodFormTranslations.title)}</h2>

            <Grid container direction='column' width='100%' alignItems='center'>
                <Grid container columnSpacing={20} justifyContent='center'>
                    <Grid container direction='column' height='100%' justifyContent='space-around'>
                        <FoodInputForm name='name' onInputChange={onInputChange} value={name}/>

                        <FoodInputForm name='price' onInputChange={onInputChange} value={price}/>
                    </Grid>

                    <RadioGroup value={type} name='type' onChange={onInputChange}>
                        {
                            FoodTypes.map((type, i) => (
                                <FormControlLabel
                                    key={i}
                                    value={type}
                                    control={<Radio/>}
                                    label={t($ => $.FoodFormTranslations[type])}/>
                            ))}
                    </RadioGroup>
                </Grid>

                <Grid container width='100%' justifyContent='space-around'>
                    <Grid minWidth='45%'>
                        <CompositionForm composition={composition}
                                         setCompositions={setComposition}
                                         onCompositionInputChange={onCompositionInputChange}
                        />
                    </Grid>

                    <Grid minWidth='45%'>
                        <AdditiveForm additives={additives}
                                      setAdditives={setAdditives}
                                      onAdditiveInputChange={onAdditivesInputChange}/>
                    </Grid>
                </Grid>
            </Grid>

            <Button fullWidth onClick={compileAndRegisterFood}>{t($ => $.FoodFormTranslations.register)}</Button>
        </Grid>
    )
}
