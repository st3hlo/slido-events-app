import { Dispatch } from 'react';

import { EventsListReducerState, } from './reducers/event/list';
import { Action } from '../models/store/Action';

type ContextValue<S, A> = [S, Dispatch<Action<A>>];

export type EventListContext = ContextValue<EventsListReducerState, string>;
