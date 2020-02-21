import React from "react";
import {
  getDaysInMonth,
  startOfMonth,
  getDay,
  addDays,
  addMonths,
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
  const futureDays = 35 - paddingDays - daysInMonth;

  const prevDays = Array(paddingDays)
    .fill(0)
    .map((_, i) =>
      subDays(endOfMonth(subMonths(currentPageDate, 1)), paddingDays - i - 1)
    );

  const days = Array(daysInMonth)
    .fill(1)
    .map((_, i) => addDays(startOfMonth(currentPageDate), i));

  const nextDays = Array(futureDays > 0 ? futureDays : 0)
    .fill(0)
    .map((_, i) => addDays(startOfMonth(addMonths(currentPageDate, 1)), i));

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
        {prevDays.map(day => (
          <Date date={day} differentMonth={true} />
        ))}
        {days.map(day => (
          <Date date={day} />
        ))}
        {nextDays.map(day => (
          <Date date={day} differentMonth={true} />
        ))}
      </DayWrapper>
    </Wrapper>
  );
};
