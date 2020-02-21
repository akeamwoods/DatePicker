import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store, useTypedSelector } from "./store";
import { DatePicker } from "./components/DatePicker";

function App() {
  const date = useTypedSelector(state => state.date);
  return (
    <div className="App">
      <DatePicker currentPageDate={date} />
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
