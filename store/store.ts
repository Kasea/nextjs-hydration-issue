import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadStore, saveStore } from "./persist";

const slice = createSlice({
  name: "input",
  initialState: "",
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const selectInput = (state: RootState) => state.input;
export const { setInputValue } = slice.actions;

export const store = configureStore({
  reducer: {
    [slice.name]: slice.reducer,
  },

  preloadedState: loadStore(),
});

store.subscribe(() => {
  saveStore(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
