import {PieChart} from "@mui/x-charts/PieChart";
import {useEffect, useState} from "react";
import type {PieValueType} from "@mui/x-charts/models/seriesType/pie";
import type {Additive} from "../../../types/Food/Additive";

export function AdditivesPieChart(props: { additives: Array<Additive> }) {
    const {additives} = props

    const [dataTable, setDataTable] = useState<Array<PieValueType>>([])

    useEffect(() => {
        const newDataTable = []

        for (const component of additives) {
            const newData = {
                id: component.name,
                value: component.quantity,
                label: component.name
            }

            newDataTable.push(newData)
        }

        setDataTable(newDataTable)

    }, [additives])

    return (
        <PieChart series={[{data: dataTable, sortingValues: 'desc'}]}/>
    )
}
