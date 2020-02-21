import React from "react";
import { Wrapper, DateText } from "./style";
import { format, isSameMonth, isBefore, isAfter, isSameDay } from "date-fns";
import { useTypedSelector } from "../../../store";
import { useDispatch } from "react-redux";
import { actions } from "../../../store/actions";
import { start } from "repl";

export const Date: React.FC<{
  heading?: string;
  date?: Date;
}> = ({ heading, date }) => {
  const dispatch = useDispatch();
  const sameMonth = useTypedSelector(state =>
    date && isSameMonth(date, state.date) ? true : false
  );

  const isSelected = useTypedSelector(state =>
    date &&
    ((state.startDate && isSameDay(date, state.startDate)) ||
      (state.endDate && isSameDay(date, state.endDate)))
      ? true
      : false
  );

  const isWithinRange = useTypedSelector(state =>
    date &&
    state.endDate &&
    state.startDate &&
    isBefore(date, state.endDate) &&
    isAfter(date, state.startDate)
      ? true
      : false
  );

  return (
    <Wrapper
      isDate={date ? true : false}
      isWithinRange={isWithinRange}
      isSelected={isSelected}
      onClick={() => (date ? dispatch(actions.dateClicked(date)) : void {})}
    >
      <DateText isHeading={heading ? true : false} differentMonth={!sameMonth}>
        {heading ? heading : date ? format(date, "d") : undefined}
      </DateText>
    </Wrapper>
  );
};
