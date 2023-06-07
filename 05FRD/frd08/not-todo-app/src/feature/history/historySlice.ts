import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "test history", time: new Date().toISOString() },
];

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    writeRecord: (state, action: PayloadAction<string>) => {
      let timenow = new Date().toISOString();
      let maxId = 0;
      state.map((item) => {
        if (item.id > maxId) {
          maxId = item.id;
        }
        return item;
      });
      let realId;
      if (maxId === 0) {
        realId = 1;
      } else {
        realId = maxId + 1;
      }

      state.push({ id: realId, name: action.payload, time: timenow });
    },

    deleteRecord: (state, action: PayloadAction<number>) => {
      console.log("delete");
      console.log(action.payload);
      console.log(state);

      state = state.filter((item) => item.id !== action.payload);
      return state;
    },
  },
});

export const { writeRecord, deleteRecord } = historySlice.actions;
export default historySlice.reducer;
