import {Grid} from "@mui/material";
import '../../i18n/i18n'
import {useTranslation} from "react-i18next";
import type {Food} from "../../types/Food/Food";
import {CompositionPieChart} from "../FoodCharts/CompositionPieChart/CompositionPieChart";
import {AdditivesPieChart} from "../FoodCharts/AdditivesPieChart/AdditivesPieChart";

export function FoodCard(props: { food?: Food }) {
    const {food} = props

    const {t} = useTranslation();

    if (!food) {
        return <p>{t('FoodCard.NoFoodError')}</p>
    }

    return (
        <Grid container direction='column'>
            <Grid container width='100%' justifyContent='center'>
                <h2>{food.name} - {food.price} {food.currency} - {food.type}</h2>
            </Grid>

            <Grid container width='100%' justifyContent='space-around' alignItems='center'>
                <Grid>
                    <h3>{t('FoodCard.composition')}</h3>

                    <CompositionPieChart composition={food.composition}/>
                </Grid>


                <Grid>
                    <h3>{t('FoodCard.additives')}</h3>

                    <AdditivesPieChart additives={food.additives}/>
                </Grid>
            </Grid>
        </Grid>
    )
}
