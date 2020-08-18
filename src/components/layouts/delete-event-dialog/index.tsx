import * as React from 'react';

import { Dialog, DialogContent, Button, Typography } from '@material-ui/core';

import { DeleteEventDialogProps } from './delete-event-dialog-props';

export const DeleteEventDialog = ({isOpen, onClose, handleDelete}: DeleteEventDialogProps) => {
    return (
        <Dialog
            onClose={onClose}
            open={isOpen}
            maxWidth="sm"
            fullWidth
        >
            <DialogContent dividers={true}>
                <Typography style={{paddingLeft: "8px", marginBottom: "10px" }} variant="body2">
                    Are you sure you want to delete this event?
                </Typography>
                <Button onClick={onClose} color="primary">
                    close
                </Button>
                <Button onClick={handleDelete} color="primary">
                    delete
                </Button>
            </DialogContent>
        </Dialog>
    );

};
