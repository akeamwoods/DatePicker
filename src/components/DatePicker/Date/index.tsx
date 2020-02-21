import React from "react";
import { Wrapper, DateText } from "./style";
import { format } from "date-fns";

export const Date: React.FC<{
  heading?: string;
  date?: Date;
  onSelect?: () => void;
  differentMonth?: boolean;
}> = ({ heading, date, onSelect, differentMonth = false }) => {
  console.log(differentMonth);
  return (
    <Wrapper onClick={onSelect ? onSelect : undefined}>
      <DateText
        isHeading={heading ? true : false}
        differentMonth={differentMonth}
      >
        {heading ? heading : date ? format(date, "d") : undefined}
      </DateText>
    </Wrapper>
  );
};
