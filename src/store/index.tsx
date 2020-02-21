import { Actions, actions } from "./actions";
import { Reducer, createStore } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import produce from "immer";
import { getType } from "typesafe-actions";
import { startOfMonth } from "date-fns";

const initialState = () => ({
  date: startOfMonth(new Date())
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
    }
  });

export const store = createStore(rootReducer, composeWithDevTools());
export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;
