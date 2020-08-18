import { Reducer, useCallback, useReducer } from 'react';

import { Action } from '../../models/store/Action';
import { fetchApi } from '../networks';
import { EventsListAction } from '../../store/reducers/event/list';

export const useFetchMiddleware = <S>(reducer: Reducer<S, Action>, initialState: S, actions: any) => {
    const [state, dispatch] = useReducer<Reducer<S, Action>>(reducer, initialState);

    const enhanceDispatch = useCallback((action: Action) => {
        if (action.type === actions.Index) {
            fetchApi(
                dispatch,
                { fetch: actions.Index, success: actions.IndexSuccess, failure: actions.IndexFailure },
                { method: 'GET' },
                '/events'
            );
        }

        if (action.type === actions.Create) {
            dispatch({ type: EventsListAction.CreateSuccess, payload: { params: action.payload?.params } });
        }

        if (action.type === actions.Delete) {
            dispatch({ type: EventsListAction.DeleteSuccess, payload: { params: action.payload?.params } });
        }

        dispatch(action);
    }, [dispatch, actions]);

    return [state, enhanceDispatch];
};
