import {TextField} from "@mui/material";
import '../../i18n/i18n'
import type {ChangeEvent} from "react";
import {useTranslation} from "react-i18next";

export interface FoodInputFormProps {
    onInputChange: (event: ChangeEvent) => void;
    value: number | string;
    type?: string;
    name: string;
}

export function FoodInputForm(props: FoodInputFormProps) {
    const {onInputChange, value, type, name} = props

    const {t} = useTranslation();

    return (
        <TextField
            required
            margin='dense'
            name={name}
            type={type || 'text'}
            onChange={onInputChange}
            value={value}
            label={t(`FoodForm.${name}`)}
            size='small'
        />
    )
}
