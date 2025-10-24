import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GridDataEntry } from "griddier-range-manager/range-builder/types";

const initialState: Record<string, GridDataEntry> = {};

const gridDataSlice = createSlice({
  name: "gridData",
  initialState,
  reducers: {
    overwriteGridData: (
      _state,
      action: PayloadAction<Record<string, GridDataEntry>>
    ) => {
      return action.payload;
    },
    addGridData: (
      state,
      action: PayloadAction<Record<string, GridDataEntry>>
    ) => {
      Object.assign(state, action.payload);
    },
    deleteGrid: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
  },
});

export const { overwriteGridData, addGridData, deleteGrid } =
  gridDataSlice.actions;
export default gridDataSlice.reducer;
