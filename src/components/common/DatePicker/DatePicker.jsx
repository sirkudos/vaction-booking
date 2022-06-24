import React, { useState } from "react";
import "rsuite/dist/rsuite.min.css";
import { DateRangePicker } from "rsuite";

import styled from "styled-components";

const DatePicker = () => {
  const StyledDatePicker = styled(DateRangePicker)`
    position: ${({ position }) => position};
    top: ${({ top }) => top};
    bottom: ${({ bottom }) => bottom};
    right: ${({ right }) => right};
    left: ${({ left }) => left};

    & .rdrCalendarWrapper {
      background-color: "red";
    }
  `;

  const handleChange = (date) => {
    console.log("date", date);
  };

  return (
    <StyledDatePicker>
      onChange={(date) => console.log("date", date)}
      Placeholder="Select Date Range" appearance="default"
      {/* position="absolute" */}
    </StyledDatePicker>
  );
};

export default DatePicker;
