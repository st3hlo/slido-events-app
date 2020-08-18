import { createContext } from 'react';

import { PartialChildren } from '../foundation/ui';
import { useFetchMiddleware } from '../services/hooks';

import { composeProviders } from './ComposeProviders';
import { State } from '../models/store/State';

import {
    eventListReducer,
    EVENT_LIST_INITIAL_STATE,
    EventsListAction,
    EventsListReducerState,
} from './reducers/event/list';

import { EventListContext } from './StoreProviderProps';

export const GlobalState = {
    [State.EventList]: createContext<EventListContext>([EVENT_LIST_INITIAL_STATE, () => {}]),
};

export const StoreProvider = ({ children }: PartialChildren) => {
    const ContextValues = {
        [State.EventList]: (
            useFetchMiddleware<EventsListReducerState>(eventListReducer, EVENT_LIST_INITIAL_STATE, EventsListAction)
        ),
    };

    return composeProviders(GlobalState, ContextValues, children)
};
