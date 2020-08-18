import React from 'react';

import { Fab } from '@material-ui/core';
import Add from '@material-ui/icons/Add';

import { MainAppBar } from '../../items/main-app-bar';
import { EventCreateDialog } from '../../layouts/event-create-dialog';
import { EventList } from '../../layouts/event-list';


export const DashboardPage = () => {
    const [dialogOpen, setDialogOpen] = React.useState(false);

    const handleClose = () => {
        setDialogOpen(false)
    };

    const handleOpenCreateDialog = () => {
        setDialogOpen(true)
    };
   
    return (
        <>
            <MainAppBar />
            <EventList />
            <Fab onClick={handleOpenCreateDialog} style={{position: "fixed", right: "50px", bottom: "50px"}} color="primary" aria-label="add">
                <Add />
            </Fab>
            <EventCreateDialog
                isOpen={dialogOpen} 
                onClose={handleClose} 
            />
        </>
    );
};