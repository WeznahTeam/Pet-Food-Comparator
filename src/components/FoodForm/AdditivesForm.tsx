import {
    Grid,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import {Add, Delete} from "@mui/icons-material";
import type {ChangeEvent} from "react";
import '../../i18n/i18n'
import {useTranslation} from "react-i18next";
import type {Component} from "../../types/Food/Component";

export function AdditiveForm(props: { setAdditives: any, additives: any, onAdditiveInputChange: any }) {
    const {setAdditives, additives, onAdditiveInputChange} = props

    const {t} = useTranslation();

    function createNewAdditive() {
        const newComponent = {name: `new-${additives.length}`, quantity: 0}

        setAdditives((prev: any) => [...prev, newComponent])
    }

    return (
        <Grid container direction='column' width='100%' height='100%' alignItems='center'>
            <h3>{t('FoodForm.additivesTitle')}</h3>

            <TableContainer sx={{maxHeight: 440}}>
                <Table stickyHeader padding='none' size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell>{t('FoodForm.name')}</TableCell>

                            <TableCell>{t('FoodForm.quantity')} (mg)</TableCell>

                            <TableCell>
                                <IconButton
                                    children={<Add/>}
                                    onClick={createNewAdditive}/>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {additives.map((additive: Component, i: number) => (
                            <TableRow key={i}>
                                <TableCell>
                                    <TextField
                                        required
                                        size='small'
                                        margin='dense'
                                        onChange={(event: ChangeEvent) => onAdditiveInputChange(event, i)}
                                        value={additive.name}
                                        label={t('FoodForm.type')}
                                        name='name'
                                    />
                                </TableCell>

                                <TableCell>
                                    <TextField
                                        required
                                        size='small'
                                        margin='dense'
                                        onChange={(event: ChangeEvent) => onAdditiveInputChange(event, i)}
                                        value={additive.quantity}
                                        label={t('FoodForm.type')}
                                        name='quantity'
                                        type='number'
                                    />
                                </TableCell>

                                <TableCell>
                                    <IconButton
                                        onClick={() => setAdditives((prev: any) => prev.filter((_: any, j: number) => j !== i))}
                                        children={<Delete/>}/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}
