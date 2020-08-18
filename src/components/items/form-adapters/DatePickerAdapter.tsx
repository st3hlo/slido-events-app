import * as React from 'react';

import { FieldRenderProps } from "react-final-form";
import DateFnsUtils from '@date-io/date-fns';

import { KeyboardDatePickerProps, MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import { Box } from '@material-ui/core';

export const DatePickerAdapter = ({input, meta, onChange,  ...rest }: FieldRenderProps<string> & KeyboardDatePickerProps) => {
    const handleDateChange = (date: Date) => {
        input.onChange(date);
    };

    return(
        <Box display="flex" flexDirection="column">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimePicker 
                    {...input}
                    {...rest} 
                    value={new Date(input.value)} 
                    inputVariant="outlined"
                    // @ts-ignore
                    onChange={handleDateChange} 
                    error={meta.error && meta.touched}
                    helperText={null}
                />
            </MuiPickersUtilsProvider>
            {meta.error && meta.touched && <span style={{marginTop: "16px", paddingLeft: "16px", color: "#f44336"}}>{meta.error}</span>}
        </Box>
    );
};