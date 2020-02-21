import React from "react";
import { Wrapper, DateText } from "./style";
import { format, isSameMonth } from "date-fns";
import { useTypedSelector } from "../../../store";
import { useDispatch } from "react-redux";
import { actions } from "../../../store/actions";

export const Date: React.FC<{
  heading?: string;
  date?: Date;
}> = ({ heading, date }) => {
  const dispatch = useDispatch();
  const sameMonth = useTypedSelector(state =>
    date && isSameMonth(date, state.date) ? true : false
  );

  return (
    <Wrapper
      onClick={() => (date ? dispatch(actions.dateClicked(date)) : void {})}
    >
      <DateText isHeading={heading ? true : false} differentMonth={!sameMonth}>
        {heading ? heading : date ? format(date, "d") : undefined}
      </DateText>
    </Wrapper>
  );
};
