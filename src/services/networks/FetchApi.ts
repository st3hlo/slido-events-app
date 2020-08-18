import { Action, ActionMap } from '../../models/store/Action';
import { Dispatch } from 'react';
import { isEmpty } from 'lodash';

export const fetchApi = <S>(dispatch: Dispatch<Action>, actions: ActionMap, props: RequestInit, endpoint?: string) => {
    (async() => {
        try {
            const res = await fetch(`https://my-json-server.typicode.com/st3hlo/slido-events-app${endpoint || ''}`, props);
            const data = await res.json();

            dispatch({ type: actions.success, payload: { result: !isEmpty(data) ? data : null } });
        } catch (error) {
            dispatch({ type: actions.failure, payload: { error } });
        }
    })();
};
