import { Either } from "./Either.js";
declare const MAYBE_BRAND: unique symbol;
type MaybeTagObject = {
    readonly [MAYBE_BRAND]: 'Maybe';
};
export type None = Readonly<{
    readonly __Maybe_None: 'None';
}> & MaybeTagObject;
export type Some<T> = T & MaybeTagObject;
export type Maybe<T> = None | Some<T>;
export declare const none: None;
export declare const some: <T>(t: T) => Some<T>;
export declare const fromUndefinable: <T>(v: T | undefined) => Maybe<T>;
export declare const isNone: <T>(m: Maybe<T>) => m is None;
export declare const isSome: <T>(m: Maybe<T>) => m is Some<T>;
export declare const map: <T, U>(m: Maybe<T>, onNone: () => U, onSome: (value: T) => U) => U;
export declare const mapSome: <T, U>(m: Maybe<T>, onSome: (value: T) => U) => Maybe<U>;
export declare const mapNone: <T>(m: Maybe<T>, onNone: () => T) => Maybe<T>;
export declare const unwrapOr: <T>(m: Maybe<T>, onNone: () => T) => T;
export declare const orElse: <T>(m: Maybe<T>, onNone: () => Maybe<T>) => Maybe<T>;
export declare const okOrElse: <T, E>(m: Maybe<T>, onNone: () => E) => Either<E, T>;
export {};
