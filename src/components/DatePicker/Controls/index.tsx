import React from "react";
import { Wrapper, TransparentButton } from "./style";
import { format, subMonths, addMonths } from "date-fns";
import { useTypedSelector } from "../../../store";
import { actions } from "../../../store/actions";
import { useDispatch } from "react-redux";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export const Controls = () => {
  const dispatch = useDispatch();
  const date = useTypedSelector(state => state.date);
  return (
    <Wrapper>
      <TransparentButton
        onClick={() => dispatch(actions.dateChanged(subMonths(date, 1)))}
      >
        <FaCaretLeft />
      </TransparentButton>
      <h4>{format(date, "MMMM yyyy")}</h4>
      <TransparentButton
        onClick={() => dispatch(actions.dateChanged(addMonths(date, 1)))}
      >
        <FaCaretRight />
      </TransparentButton>
    </Wrapper>
  );
};
