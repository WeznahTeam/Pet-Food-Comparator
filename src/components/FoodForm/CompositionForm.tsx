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
import {ChangeEvent} from "react";
import '../../i18n/i18n'
import {useTranslation} from "react-i18next";
import type {Component} from "../../types/Food/Component";

export function CompositionForm(props: { setCompositions, composition, onCompositionInputChange }) {
    const {setCompositions, composition, onCompositionInputChange} = props

    const {t} = useTranslation();

    function createNewComponent() {
        const newComponent = {name: `new-${composition.length}`, quantity: 0}

        setCompositions((prev) => [...prev, newComponent])
    }

    return (
        <Grid container direction='column' width='100%' height='100%' alignItems='center'>
            <h3>{t($ => $.FoodForm.componentTitle)}</h3>

            <TableContainer sx={{maxHeight: 440}}>
                <Table stickyHeader padding='none' size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell padding='none'>{t($ => $.FoodForm.name)}</TableCell>

                            <TableCell padding='none'>{t($ => $.FoodForm.percent)}</TableCell>

                            <TableCell padding='none'>
                                <IconButton
                                    children={<Add/>}
                                    onClick={createNewComponent}/>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {composition.map((component: Component, i) => (
                            <TableRow key={i}>
                                <TableCell padding='none'>
                                    <TextField
                                        required
                                        size='small'
                                        margin='dense'
                                        onChange={(event: ChangeEvent) => onCompositionInputChange(event, i)}
                                        value={component.name}
                                        name='name'
                                    />
                                </TableCell>

                                <TableCell padding='none'>
                                    <TextField
                                        required
                                        size='small'
                                        margin='dense'
                                        onChange={(event: ChangeEvent) => onCompositionInputChange(event, i)}
                                        value={component.quantity}
                                        name='quantity'
                                        type='number'
                                    />
                                </TableCell>

                                <TableCell padding='none'>
                                    <IconButton
                                        onClick={() => setCompositions((prev) => prev.filter((_, j) => j !== i))}
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
