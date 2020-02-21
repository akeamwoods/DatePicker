import { Actions, actions } from "./actions";
import { Reducer, createStore } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import produce from "immer";
import { getType } from "typesafe-actions";
import { startOfMonth, isAfter } from "date-fns";

const initialState = () => ({
  date: startOfMonth(new Date()),
  startDate: undefined as undefined | Date,
  endDate: undefined as undefined | Date
});

export type State = Readonly<ReturnType<typeof initialState>>;

export const rootReducer: Reducer<State, Actions> = (
  state = initialState(),
  action: Actions
) =>
  produce(state, draft => {
    switch (action.type) {
      case getType(actions.dateChanged):
        draft.date = action.payload;
        break;
      case getType(actions.dateClicked):
        if (draft.startDate && draft.endDate) {
          draft.startDate = undefined;
          draft.endDate = undefined;
        } else if (draft.startDate) {
          if (draft.startDate === action.payload) {
            draft.startDate = undefined;
          } else {
            if (isAfter(action.payload, draft.startDate)) {
              draft.endDate = action.payload;
            } else {
              draft.endDate = draft.startDate;
              draft.startDate = action.payload;
            }
          }
        } else {
          draft.startDate = action.payload;
        }
        break;
    }
  });

export const store = createStore(rootReducer, composeWithDevTools());
export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;
