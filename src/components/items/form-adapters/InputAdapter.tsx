import * as React from 'react';

import { FieldRenderProps } from "react-final-form";
import { TextFieldProps } from '@material-ui/core';

import { Input } from "../input";

export const InputAdapter = ({ input, meta, error,  ...rest }: FieldRenderProps<string> & TextFieldProps) => {
    return(
        <>
            <Input
                {...input}
                {...rest}
                error={meta.error && meta.touched}
            />
            {meta.error && meta.touched && <span style={{marginBottom: "16px", paddingLeft: "16px", color: "#f44336"}}>{meta.error}</span>}
        </>
    );
};