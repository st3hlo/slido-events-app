import React from 'react';

import { Select, MenuItem, InputLabel, Box } from '@material-ui/core';

import { FieldRenderProps } from 'react-final-form';

export const SelectAdapter = ({ input, meta, ...rest }: FieldRenderProps<string>) => {
    return (
        <Box display="flex" flexDirection="column">
            <InputLabel id="demo-simple-select-label" style={{paddingLeft: "14px"}}>category*</InputLabel>
            <Select
                style={{minWidth: "120px", marginTop: "7px"}}
                error={ meta.error && meta.touched }
                {...rest}
                {...input}
            >
                <MenuItem value="Culture">Culture</MenuItem>
                <MenuItem value="Sports">Sports</MenuItem>
                <MenuItem value="Music">Music</MenuItem>
                <MenuItem value="Fashion">Fashion</MenuItem>
                <MenuItem value="Traveling">Traveling</MenuItem>
                <MenuItem value="Seminar">Seminar</MenuItem>
            </Select>
            {meta.error && meta.touched && <span style={{color: "#f44336", marginBottom: "16px", marginTop: "16px", paddingLeft: "16px"}}>{meta.error}</span>}
        </Box>
    );
};