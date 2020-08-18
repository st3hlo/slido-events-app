import * as React from 'react';

import TextField, { TextFieldProps } from '@material-ui/core/TextField';

export const Input = ({ onChange, value, label, defaultValue, ...rest }: TextFieldProps) => {
    return (
        <TextField
            label={label}
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
            fullWidth={true}
            {...rest}
        />
    );
;}