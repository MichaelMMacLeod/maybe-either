import { Maybe, none, some } from "./Maybe.js";

export const thenDo = /*@__PURE__*/ <T>(b: boolean, onTrue: () => T): Maybe<T> => {
    if (b) {
        return some(onTrue());
    }
    return none;
};