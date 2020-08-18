import * as _ from "lodash";

import { KeyedLiteral } from "../KeyedLiteral";

export const baseClassModifier = (baseClass: string, conditions: KeyedLiteral, className?: string) => {
    const classes = className ? [baseClass, className] : [baseClass];
    _.each(_.pickBy(conditions), (condition, key) => classes.push(`${baseClass}--${key}`));
    return classes.join(" ");
};
