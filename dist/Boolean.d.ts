import { Maybe } from "./Maybe.js";
export declare const thenDo: <T>(b: boolean, onTrue: () => T) => Maybe<T>;
