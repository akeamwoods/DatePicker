import React from "react";
import { render } from "react-dom";
import { Provider, useDispatch } from "react-redux";
import { store, useTypedSelector } from "./store";
import { DatePicker } from "./components/DatePicker";
import { actions } from "./store/actions";
import { subMonths, addMonths } from "date-fns";

function App() {
  const date = useTypedSelector(state => state.date);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <DatePicker
        prevClicked={() => dispatch(actions.dateChanged(subMonths(date, 1)))}
        nextClicked={() => dispatch(actions.dateChanged(addMonths(date, 1)))}
        currentPageDate={date}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
