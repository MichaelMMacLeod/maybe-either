import { Maybe } from "./Maybe.js";
declare const EITHER_BRAND: unique symbol;
type EitherTagObject = {
    readonly [EITHER_BRAND]: 'Either';
};
declare const _l = 0;
declare const _r = 1;
export type Either<L, R> = {
    [_l]: Maybe<L>;
    [_r]: Maybe<R>;
} & EitherTagObject;
export declare const left: <L, R>(value: L) => Either<L, R>;
export declare const right: <L, R>(value: R) => Either<L, R>;
export declare const map: <L, R, T>(e: Either<L, R>, onLeft: (value: L) => T, onRight: (value: R) => T) => T;
export declare const ok: <L, R>(e: Either<L, R>) => Maybe<R>;
export {};
