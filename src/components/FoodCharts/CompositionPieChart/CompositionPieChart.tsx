import type {Component} from "../../../types/Food/Component";
import {PieChart} from "@mui/x-charts/PieChart";
import {useEffect, useState} from "react";
import type {PieValueType} from "@mui/x-charts";

export function CompositionPieChart(props: { composition: Array<Component> }) {
    const {composition} = props

    const [dataTable, setDataTable] = useState<Array<PieValueType>>([])

    useEffect(() => {
        const newDataTable = []

        for (const component of composition) {
            const newData = {
                id: component.name,
                value: component.quantity,
                label: `${component.name} (${component.quantity}%)`
            }

            newDataTable.push(newData)
        }

        setDataTable(newDataTable)

    }, [composition])

    return (
        <PieChart series={[{data: dataTable, sortingValues: 'desc'}]}/>
    )
}
