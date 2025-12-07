import { Either, left, right } from "./Either.js";
import { Maybe, none, some } from "./Maybe.js";

export const thenDo = <T>(b: boolean, onTrue: () => T): Maybe<T> => {
    if (b) {
        return some(onTrue());
    }
    return none;
};

export const map = <L, R>(b: boolean, onFalse: () => L, onTrue: () => R): Either<L, R> => {
    if (b) {
        return right(onTrue());
    }
    return left(onFalse());
};