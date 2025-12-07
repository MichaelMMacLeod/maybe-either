import { Either, left, right } from "./Either.js";

declare const MAYBE_BRAND: unique symbol;
type MaybeTagObject = { readonly [MAYBE_BRAND]: 'Maybe' };

export type None = Readonly<{ readonly __Maybe_None: 'None' }> & MaybeTagObject;

export type Some<T> = T & MaybeTagObject;

export type Maybe<T> = None | Some<T>;

export const none: None = Object.freeze({ __Maybe_None: 'None' }) as None;

export const some = <T>(t: T): Some<T> => {
    return t as Some<T>;
};

export const isNone = <T>(m: Maybe<T>): m is None => {
    return m === none;
};

export const isSome = <T>(m: Maybe<T>): m is Some<T> => {
    return m !== none;
};

export const map = <T, U>(
    m: Maybe<T>,
    onNone: () => U,
    onSome: (value: T) => U
): U => {
    if (isSome(m)) {
        return onSome(m);
    }
    return onNone();
};

export const mapSome = <T, U>(
    m: Maybe<T>,
    onSome: (value: T) => U
): Maybe<U> => {
    if (isSome(m)) {
        return some(onSome(m));
    }
    return none;
};

export const unwrapOr = <T>(m: Maybe<T>, onNone: () => T): T => {
    return map(m, onNone, v => v);
};

export const orElse = <T>(m: Maybe<T>, onNone: () => Maybe<T>): Maybe<T> => {
    return map(m, onNone, v => some(v));
};

export const okOrElse = <T, E>(m: Maybe<T>, onNone: () => E): Either<E, T> => {
    return map(m, () => left(onNone()), v => right(v));
};