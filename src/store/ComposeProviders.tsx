import React from 'react';

import { KeyedLiteral } from '../foundation';

export const composeProviders = (
    contextList: KeyedLiteral, valueList: KeyedLiteral, children: any) => (
    Object.keys(contextList).reduce((acc, key) => {
        const Context = contextList[key];

        return <Context.Provider value={valueList[key]}>{acc}</Context.Provider>;
    }, children)
);
