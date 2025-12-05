import { left, right } from "./Either.js";
export const none = Object.freeze({ __Maybe_None: 'None' });
export /*@__INLINE__*/ const some = (t) => {
    return t;
};
export /*@__INLINE__*/ const isNone = (m) => {
    return m === none;
};
export /*@__INLINE__*/ const isSome = (m) => {
    return m !== none;
};
export /*@__INLINE__*/ const map = (m, onNone, onSome) => {
    if (isSome(m)) {
        return onSome(m);
    }
    return onNone();
};
export /*@__INLINE__*/ const mapSome = (m, onSome) => {
    if (isSome(m)) {
        return some(onSome(m));
    }
    return none;
};
export /*@__INLINE__*/ const unwrapOr = (m, onNone) => {
    return map(m, onNone, v => v);
};
export /*@__INLINE__*/ const orElse = (m, onNone) => {
    return map(m, onNone, v => some(v));
};
export /*@__INLINE__*/ const okOrElse = (m, onNone) => {
    return map(m, () => left(onNone()), v => right(v));
};
//# sourceMappingURL=Maybe.js.map