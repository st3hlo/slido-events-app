import { KeyedLiteral } from '../../foundation';

export interface ReducerState<State> {
    loading: boolean;
    error: KeyedLiteral | null;
    result: State | null;
}

export type ReducerStateMap<State> = Record<string, () => State>;
