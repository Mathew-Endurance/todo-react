import React, { FC, ReactElement, useState } from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { IDateField } from '../interfaces/IDateField';
import PropTypes from 'prop-types'


export const TaskDateField: FC <IDateField>= (props): ReactElement => {
    const{
        value = new Date(),
        disabled = false,
        onChange = (date)=> console.log(date)
       
    } = props

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          value={value}
          label="Task Date"
          format="dd/MM/yyyy"
          onChange={onChange}
          disabled={disabled}
          
        />
      </LocalizationProvider>
    </>
  );
};

TaskDateField.propTypes = {
	disabled : PropTypes.bool,
    value : PropTypes.instanceOf(Date),
    onChange :  PropTypes.func,
}