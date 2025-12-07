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

export const left = <L, R>(value: L): Either<L, R> => {
    return [some(value), none] as unknown as Either<L, R>;
};

export const right = <L, R>(value: R): Either<L, R> => {
    return [none, some(value)] as unknown as Either<L, R>;
};

export const isLeft = <L, R>(e: Either<L, R>): boolean => {
    return isSome(e[_l]);
};

export const isRight = <L, R>(e: Either<L, R>): boolean => {
    return isSome(e[_r]);
};

export const map = <L, R, T>(
    e: Either<L, R>,
    onLeft: (value: L) => T,
    onRight: (value: R) => T,
): T => {
    if (isSome(e[_r])) {
        return onRight(e[_r]);
    }
    return onLeft(e[_l] as Some<L>);
};

export const mapLeft = <L, R, LT>(
    e: Either<L, R>,
    onLeft: (value: L) => LT,
): Either<LT, R> => {
    if (isSome(e[_l])) {
        return left(onLeft(e[_l]));
    }
    return e as Either<LT, R>;
}

export const mapRight = <L, R, RT>(
    e: Either<L, R>,
    onRight: (value: R) => RT,
): Either<L, RT> => {
    if (isSome(e[_r])) {
        return right(onRight(e[_r]));
    }
    return e as Either<L, RT>;
}

export const mapLeftAndRight = <L, LP, R, RP>(
    e: Either<L, R>,
    onLeft: (value: L) => LP,
    onRight: (value: R) => RP,
): Either<LP, RP> => {
    if (isSome(e[_r])) {
        return right(onRight(e[_r] as Some<R>));
    }
    return left(onLeft(e[_l] as Some<L>));
};

export const getLeft = <L, R>(
    e: Either<L, R>,
): Maybe<L> => {
    return e[_l];
};

export const getRight = <L, R>(
    e: Either<L, R>,
): Maybe<R> => {
    return e[_r];
};