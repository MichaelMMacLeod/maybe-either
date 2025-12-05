import { Maybe, none, some, isSome, Some } from "./Maybe.js";

declare const EITHER_BRAND: unique symbol;
type EitherTagObject = { readonly [EITHER_BRAND]: 'Either' };

const _l = 0;
const _r = 1;

export type Either<L, R> = {
    // Invariant: exactly one of _l or _r is Some, the other is None
    [_l]: Maybe<L>,
    [_r]: Maybe<R>,
} & EitherTagObject;

export /*@__INLINE__*/ const left = <L, R>(value: L): Either<L, R> => {
    return [some(value), none] as unknown as Either<L, R>;
};

export /*@__INLINE__*/ const right = <L, R>(value: R): Either<L, R> => {
    return [none, some(value)] as unknown as Either<L, R>;
};

export /*@__INLINE__*/ const map = <L, R, T>(
    e: Either<L, R>,
    onLeft: (value: L) => T,
    onRight: (value: R) => T,
): T => {
    if (isSome(e[_r])) {
        return onRight(e[_r]);
    }
    return onLeft(e[_l] as Some<L>);
};

export /*@__INLINE__*/ const ok = <L, R>(
    e: Either<L, R>,
): Maybe<R> => {
    if (isSome(e[_r])) {
        return e[_r];
    }
    return none;
};