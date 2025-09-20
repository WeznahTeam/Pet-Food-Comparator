import type {ValidationsState} from "./ValidationsTypes.ts";
import {createSlice} from "@reduxjs/toolkit";

const ValidationsInitialState: ValidationsState = {}

const name = 'validations';

const validationSlice = createSlice({
  name,
  initialState: ValidationsInitialState,
  reducers: {
    test(): void {
      alert("test")
    }
  }
})

export const {test} = validationSlice.actions;

export const {reducer: validationsReducer} = validationSlice;
