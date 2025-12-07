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
export declare const isLeft: <L, R>(e: Either<L, R>) => boolean;
export declare const isRight: <L, R>(e: Either<L, R>) => boolean;
export declare const map: <L, R, T>(e: Either<L, R>, onLeft: (value: L) => T, onRight: (value: R) => T) => T;
export declare const mapLeft: <L, R, LT>(e: Either<L, R>, onLeft: (value: L) => LT) => Either<LT, R>;
export declare const mapRight: <L, R, RT>(e: Either<L, R>, onRight: (value: R) => RT) => Either<L, RT>;
export declare const mapLeftAndRight: <L, LP, R, RP>(e: Either<L, R>, onLeft: (value: L) => LP, onRight: (value: R) => RP) => Either<LP, RP>;
export declare const getLeft: <L, R>(e: Either<L, R>) => Maybe<L>;
export declare const getRight: <L, R>(e: Either<L, R>) => Maybe<R>;
export {};
