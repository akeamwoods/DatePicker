import React from "react";
import { Wrapper } from "./style";

export const Controls: React.FC<{
  prevClicked: () => void;
  nextClicked: () => void;
}> = ({ prevClicked, nextClicked }) => {
  return (
    <Wrapper>
      <button onClick={prevClicked}>prev</button>
      <button onClick={nextClicked}>next</button>
    </Wrapper>
  );
};
