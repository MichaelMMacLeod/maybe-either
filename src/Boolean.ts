import { Maybe, none, some } from "./Maybe.js";

export /*@__INLINE__*/ const thenDo = <T>(b: boolean, onTrue: () => T): Maybe<T> => {
    if (b) {
        return some(onTrue());
    }
    return none;
};