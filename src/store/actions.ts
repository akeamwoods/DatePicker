import { ActionType, createAction } from "typesafe-actions";

const dateChanged = createAction("date changed")<Date>();
const dateClicked = createAction("date clicked")<Date>();

export const actions = {
  dateChanged,
  dateClicked
};

export type Actions = ActionType<typeof actions>;
