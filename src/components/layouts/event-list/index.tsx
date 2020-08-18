import React, { useContext, useEffect } from 'react';

import { List, Card } from '@material-ui/core';

import { GlobalState } from '../../../store';
import { State } from '../../../models/store/State';
import { EventsDetailState } from '../../../store/reducers/event/detail';
import { listEvents } from '../../../store/reducers/event/list';

import { EventListItem } from '../../items/event-list-item';
import { Spinner } from '../../items/spinner';

export const EventList = () => {
    const [{ result, loading }, dispatch] = useContext(GlobalState[State.EventList]);

    useEffect(() => {
        if (!result) {
            dispatch(listEvents());
        }
    }, [result, dispatch]);

    const renderEvents = (result: EventsDetailState[]) => {
        return result.map((event, index) => {

            return <EventListItem key={index} event={event}/>
        });
    };

    return (
        <>
            {loading && <Spinner/>}
            <Card style={{width: "1100px", margin: "auto", marginTop: "160px"}}>
                <List disablePadding>
                    {!!result && renderEvents(result)}
                </List>
            </Card>
        </>
    );
};
