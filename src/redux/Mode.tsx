import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface CounterState {
  value: boolean
}
const initialState: CounterState = {
  value: true
}
export const ModeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    handleToggle: (state) => {
      return {
        ...state,
        value: !state.value
      }
    }
  }
})
export const { handleToggle } = ModeSlice.actions
export const toggleAction = (state: RootState) => state.mode.value
export default ModeSlice.reducer