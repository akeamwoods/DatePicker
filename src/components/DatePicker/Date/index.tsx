import React from "react";
import { Wrapper } from "./style";
import { format } from "date-fns";

export const Date: React.FC<{
  heading?: string;
  date?: Date;
  onSelect?: () => void;
}> = ({ heading, date, onSelect }) => {
  return (
    <Wrapper onClick={onSelect ? onSelect : undefined}>
      {heading ? heading : date ? format(date, "d") : undefined}
    </Wrapper>
  );
};
