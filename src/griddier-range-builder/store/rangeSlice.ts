import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Hand, HandActions, orderedHandsArray } from "../types";

type RangeState = {
  hands: Record<Hand, HandActions>;
};

const initialHands: Record<Hand, HandActions> = orderedHandsArray.reduce(
  (acc, hand) => {
    acc[hand] = { allin: 0, raise: 0, call: 0, prior: 4 };
    return acc;
  },
  {} as Record<Hand, HandActions>
);

const initialState: RangeState = {
  hands: initialHands,
};
const rangeSlice = createSlice({
  name: "range",
  initialState,
  reducers: {
    setHandAction: (
      state,
      action: PayloadAction<{ hand: Hand; handActions: HandActions }>
    ) => {
      state.hands[action.payload.hand] = action.payload.handActions;
    },
    resetRange: (state) => {
      state.hands = orderedHandsArray.reduce((acc, hand) => {
        acc[hand] = { allin: 0, raise: 0, call: 0, prior: 4 };
        return acc;
      }, {} as Record<Hand, HandActions>);
    },
  },
});

export const { setHandAction, resetRange } = rangeSlice.actions;

export default rangeSlice.reducer;
