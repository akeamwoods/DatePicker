import { ActionType, createAction } from "typesafe-actions";

const dateChanged = createAction("date changed")<Date>();

export const actions = {
  dateChanged
};

export type Actions = ActionType<typeof actions>;
