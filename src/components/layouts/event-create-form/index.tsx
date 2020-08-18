import * as React from 'react';
import { useContext } from 'react';

import * as _ from "lodash";
import { v4 as uuidv4 } from 'uuid';
import { Form, FormRenderProps, Field } from "react-final-form";

import { Button, Box, Typography, makeStyles, InputAdornment } from '@material-ui/core';

import { GlobalState } from '../../../store';
import { State } from '../../../models/store/State';
import { createEvent } from '../../../store/reducers/event/list';

import { InputAdapter } from '../../items/form-adapters/InputAdapter';
import { DatePickerAdapter } from '../../items/form-adapters/DatePickerAdapter';
import { SelectAdapter } from '../../items/form-adapters/SelectAdapter';

import { EventCreateFormProps } from "./event-create-form-props";
import { differenceInSeconds } from 'date-fns';

const useStyles = makeStyles({
   field: {
       marginBottom: "16px"
   }
});

export const EventCreateForm = ({ closeAction, onClose }: EventCreateFormProps) => {
    const [, dispatch] = useContext(GlobalState[State.EventList]);

    const classes = useStyles();

    const handleSubmit = (values: any) => {
     
        dispatch(createEvent({
            ...values,
            location: values.address,
            id: uuidv4(),
            image: values.image || `https://source.unsplash.com/1600x900/?${values.category}`,
            dateTo: values.dateTo,
            dateFrom: values.dateFrom,
        }));
        onClose();
    };

    const requiredValueValidate = (value: any) => (value ? undefined : 'Required Field');
    
    const numberOrEmptyValidate = (value: any) => ((isNaN(value) && !_.isEmpty(value))  ? 'Must be a number or empty' : undefined)

    const handleSubmitValidate = (values: any) => {
        if(differenceInSeconds(new Date(values.endDate), new Date(values.startDate)) < 0) {
           return { endDate: 'End date has to be later than start date' }
        };
    };
    
    const renderForm = ({ handleSubmit }: FormRenderProps ) => {
        return (
            <form onSubmit={handleSubmit}>
                <Typography variant="h5">
                    Create a new event
                </Typography>
                <Box display="flex" flexDirection="column" mt={4}>
                    <Box display="flex" flexDirection="row">
                        <Box flexGrow={1} display="flex" flexDirection="column" >
                            <Field
                                label="Name*"
                                name="name"
                                variant="outlined"
                                component={InputAdapter}
                                className={classes.field}
                                validate={requiredValueValidate}
                            />
                            <Field
                                label="Address*"
                                name="address"
                                variant="outlined"
                                component={InputAdapter}
                                className={classes.field}
                                validate={requiredValueValidate}
                            />
                            <Field
                                label="Image url"
                                name="image"
                                helperText="Specify the image url, if left empty, image from the category will be picked"
                                variant="outlined"
                                component={InputAdapter}
                                className={classes.field}
                            />
                            <Field
                                label="Description*"
                                name="description"
                                multiline
                                rows={4}
                                variant="outlined"
                                component={InputAdapter}
                                validate={requiredValueValidate}
                                className={classes.field}
                            />
                            <Box display="flex" flexDirection="row">
                                <Box>
                                    <Field
                                        name="category"
                                        variant="outlined"
                                        component={SelectAdapter}
                                        validate={requiredValueValidate}
                                    />
                                </Box>
                                <Box style={{paddingTop: "23px", marginLeft: "16px"}}>
                                    <Field
                                        label="Price"
                                        name="price"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">€</InputAdornment>,
                                        }}
                                        variant="outlined"
                                        validate={numberOrEmptyValidate}
                                        helperText="if left empty no entry fee will be set"
                                        component={InputAdapter}
                                        className={classes.field}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box mb={2} mt={2} display="flex" flexDirection="row" justifyContent="flex-start">
                        <Box>
                            <Field
                                label="startDate"
                                name="startDate"
                                variant="outlined"
                                component={DatePickerAdapter}
                                validate={requiredValueValidate}
                            />
                        </Box>
                        <Box ml={2}>
                            <Field
                                label="endDate"
                                name="endDate"
                                variant="outlined"
                                component={DatePickerAdapter}
                                validate={requiredValueValidate}
                            />
                        </Box>
                    </Box>
                    <Box mt={4} display="flex" justifyContent="flex-end">
                        <Box mr={1}>
                            {closeAction}
                        </Box>
                        <Button variant="text" color="primary" type="submit">
                            Create
                        </Button>
                    </Box>
                </Box>
            </form>
        );
    };

    // @ts-ignore
    return <Form validate={handleSubmitValidate} onSubmit={handleSubmit} render={renderForm} />;
};
