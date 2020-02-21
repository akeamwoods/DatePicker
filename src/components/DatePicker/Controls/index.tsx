import React from "react";
import { Wrapper } from "./style";
import { format, subMonths, addMonths } from "date-fns";
import { useTypedSelector } from "../../../store";
import { actions } from "../../../store/actions";
import { useDispatch } from "react-redux";

export const Controls = () => {
  const dispatch = useDispatch();
  const date = useTypedSelector(state => state.date);
  return (
    <Wrapper>
      <button onClick={() => dispatch(actions.dateChanged(subMonths(date, 1)))}>
        prev
      </button>
      <h4>{format(date, "MMMM yyyy")}</h4>
      <button onClick={() => dispatch(actions.dateChanged(addMonths(date, 1)))}>
        next
      </button>
    </Wrapper>
  );
};
