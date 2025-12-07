import { Either } from "./Either.js";
import { Maybe } from "./Maybe.js";
export declare const thenDo: <T>(b: boolean, onTrue: () => T) => Maybe<T>;
export declare const map: <L, R>(b: boolean, onFalse: () => L, onTrue: () => R) => Either<L, R>;
