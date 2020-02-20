import React from "react";
import { getDaysInMonth, startOfMonth, getDay } from "date-fns";
import { Wrapper, DayWrapper } from "./style";
import { Date } from "./Date";
import { Controls } from "../Controls";

export const DatePicker: React.FC<{
  currentPageDate: Date;
  prevClicked: () => void;
  nextClicked: () => void;
}> = ({ currentPageDate, prevClicked, nextClicked }) => {
  const dayHeadings = ["M", "T", "W", "T", "F", "S", "S"];
  const paddingDays = getDay(startOfMonth(currentPageDate)) - 1;
  const daysInMonth = getDaysInMonth(currentPageDate);

  const days = [
    ...dayHeadings,
    ...Array(paddingDays).fill(0),
    ...Array(daysInMonth)
      .fill(1)
      .map((_, i) => i + 1)
  ];

  return (
    <Wrapper>
      <Controls prevClicked={prevClicked} nextClicked={nextClicked} />

      <DayWrapper>
        {days.map((day, index) => (
          <Date key={index} day={day.toString()} />
        ))}
      </DayWrapper>
    </Wrapper>
  );
};
