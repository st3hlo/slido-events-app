import { KeyedLiteral } from '../../foundation';

type ActionPayload<ResultModel> = {
    params?: KeyedLiteral;
    result?: ResultModel | null;
    error?: KeyedLiteral | null;
}

export interface Action<ActionType = any, ResultModel = any> {
    type: ActionType;
    payload?: ActionPayload<ResultModel>;
}

export interface ActionMap {
    fetch: string;
    success: string;
    failure: string;
}
