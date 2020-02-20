import React from "react";
import { Wrapper } from "./style";

export const Date: React.FC<{ day: string }> = ({ day }) => {
  return <Wrapper>{day !== "0" ? day : undefined}</Wrapper>;
};
