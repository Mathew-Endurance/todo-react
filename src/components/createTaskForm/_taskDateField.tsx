import React, { FC, ReactElement, useState } from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';

export const TaskDateField: FC = (): ReactElement => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          value={date}
          label="Task Date"
          format="dd/MM/yyyy"
          onChange={(newValue) => setDate(newValue)}
          
        />
      </LocalizationProvider>
    </>
  );
};
