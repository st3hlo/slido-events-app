import { KeyedLiteral } from '../../../../foundation';

export enum EventsListAction {
    Reset = 'events//RESET',
    Index = 'events//INDEX',
    IndexSuccess = 'events//INDEX_SUCCESS',
    IndexFailure = 'events//INDEX_FAILURE',
    Create = 'events//CREATE',
    CreateSuccess = 'events//CREATE_SUCCESS',
    CreateFailure =  'events//CREATE_FAILURE',
    Delete = 'events//DELETE',
    DeleteSuccess = 'events//DELETE_SUCCESS',
    DeleteFailure =  'events//DELETE_FAILURE',
};

export const resetEvents = () => ({ type: EventsListAction.Reset });
export const listEvents = (params?: KeyedLiteral) => ({ type: EventsListAction.Index, payload: { params } });
export const createEvent = (params?: KeyedLiteral) => ({ type: EventsListAction.Create, payload: { params } });
export const deleteEvent = (params?: KeyedLiteral) => ({ type: EventsListAction.Delete, payload: { params } });
