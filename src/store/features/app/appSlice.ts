import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};
type SetIsLoadingAction = PayloadAction<boolean>;

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLoading: (state, action: SetIsLoadingAction) => {
      state.isLoading = action.payload;
    },
  },
});

const appReducer = appSlice.reducer;
const appActions = appSlice.actions;

export { appReducer, appActions };
