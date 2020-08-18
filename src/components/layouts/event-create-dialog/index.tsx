import * as React from 'react';

import { Dialog, DialogContent, Button } from '@material-ui/core';

import { EventCreateForm } from '../../layouts/event-create-form';

import { EventCreateDialogProps } from "./event-create-dialog-props";

export const EventCreateDialog = ({isOpen, onClose}: EventCreateDialogProps) => {

    const closeButton = (
        <Button onClick={onClose} color="primary">
            close
        </Button>
    );

    return (
        <Dialog
            onClose={onClose}
            open={isOpen}
            maxWidth="md"
            fullWidth
        >
           <DialogContent>
                <EventCreateForm closeAction={closeButton} onClose={onClose} />
           </DialogContent>
        </Dialog>
    );
};
