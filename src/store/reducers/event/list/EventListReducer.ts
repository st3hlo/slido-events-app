import { Reducer } from 'react';

import { EventsListAction } from './EventsListActions';
import { EventsListState } from './EventsListState';

import { ReducerState, ReducerStateMap } from '../../../../models/store/ReducerState';
import { Action } from '../../../../models/store/Action';

export const EVENT_LIST_INITIAL_STATE = { result: null, error: null, loading: false };

export const eventListReducer = (
    state: EventsListReducerState = EVENT_LIST_INITIAL_STATE,
    { type, payload }: Action<EventsListAction, EventsListState[]>
) => {
    const map = ({
        [EventsListAction.Reset]: () => EVENT_LIST_INITIAL_STATE,
        [EventsListAction.Index]: () => ({ ...state, loading: true }),
        [EventsListAction.IndexSuccess]: () => ({
            result: payload?.result,
            error: null,
            loading: false
        }),
        [EventsListAction.IndexFailure]: () => ({ list: null, result: null, error: payload?.error, loading: false }),
        [EventsListAction.CreateSuccess]: () => ({
            result: payload?.params ? [...(state.result || []), payload?.params] : state.result,
            error: null,
            loading: false
        }),
        [EventsListAction.CreateFailure]: () => ({ result: null, error: payload?.error, loading: false }),
        [EventsListAction.DeleteSuccess]: () => {
            const asd = ({
                result: state.result?.filter(({ id }) => id !== payload?.params?.id),
                error: null,
                loading: false
            })

            return asd;
        },
        [EventsListAction.CreateFailure]: () => ({ result: null, error: payload?.error, loading: false }),
    }) as ReducerStateMap<EventsListReducerState>;

    return map[type] ? map[type]() : state;
};

export type EventListReducer = Reducer<EventsListReducerState, Action<EventsListAction>>;
export type EventsListReducerState = ReducerState<EventsListState>;

