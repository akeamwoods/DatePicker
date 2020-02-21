import React from "react";
import {
  getDaysInMonth,
  startOfMonth,
  getDay,
  addDays,
  subMonths,
  endOfMonth,
  subDays
} from "date-fns";
import { Wrapper, DayWrapper } from "./style";
import { Date } from "./Date";
import { Controls } from "./Controls";

export const DatePicker: React.FC<{
  currentPageDate: Date;
  prevClicked: () => void;
  nextClicked: () => void;
}> = ({ currentPageDate, prevClicked, nextClicked }) => {
  const dayHeadings = ["M", "T", "W", "T", "F", "S", "S"];
  const padding = getDay(startOfMonth(currentPageDate));
  const paddingDays = padding > 0 ? padding - 1 : padding;
  const daysInMonth = getDaysInMonth(currentPageDate);

  const days = [
    ...Array(paddingDays)
      .fill(0)
      .map((_, i) =>
        subDays(endOfMonth(subMonths(currentPageDate, 1)), paddingDays - i - 1)
      ),
    ...Array(daysInMonth)
      .fill(1)
      .map((_, i) => addDays(startOfMonth(currentPageDate), i))
  ];
  console.log(days);
  return (
    <Wrapper>
      <Controls
        date={currentPageDate}
        prevClicked={prevClicked}
        nextClicked={nextClicked}
      />

      <DayWrapper>
        {dayHeadings.map((day, index) => (
          <Date key={index} heading={day} />
        ))}
        {days.map(day => (
          <Date date={day} />
        ))}
      </DayWrapper>
    </Wrapper>
  );
};
