import React from 'react';

import { EventDetailAppBar } from '../../items/event-detail-app-bar';
import { EventDetail } from "../../layouts/event-detail"

export const EventDetailPage = () => {
    return (
        <>
            <EventDetailAppBar name="Event Detail"/>
            <EventDetail/>
        </>
    )
};