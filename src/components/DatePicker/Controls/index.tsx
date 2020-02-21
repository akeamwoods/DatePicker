import React from "react";
import { Wrapper } from "./style";
import { format } from "date-fns";

export const Controls: React.FC<{
  date: Date;
  prevClicked: () => void;
  nextClicked: () => void;
}> = ({ date, prevClicked, nextClicked }) => {
  return (
    <Wrapper>
      <button onClick={prevClicked}>prev</button>
      <h3>{format(date, "MMMM yyyy")}</h3>
      <button onClick={nextClicked}>next</button>
    </Wrapper>
  );
};
