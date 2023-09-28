import { createSelector } from "reselect";
import { RootState } from "../../store";

const selectAppState = (state: RootState) => state.app;

export const selectIsLoading = createSelector(
  [selectAppState],
  (appState) => appState.isLoading
);
