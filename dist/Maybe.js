import { left, right } from "./Either.js";
export const none = Object.freeze({ __Maybe_None: 'None' });
export const some = /*@__PURE__*/ (t) => {
    return t;
};
export const isNone = /*@__PURE__*/ (m) => {
    return m === none;
};
export const isSome = /*@__PURE__*/ (m) => {
    return m !== none;
};
export const map = /*@__PURE__*/ (m, onNone, onSome) => {
    if (isSome(m)) {
        return onSome(m);
    }
    return onNone();
};
export const mapSome = /*@__PURE__*/ (m, onSome) => {
    if (isSome(m)) {
        return some(onSome(m));
    }
    return none;
};
export const unwrapOr = /*@__PURE__*/ (m, onNone) => {
    return map(m, onNone, v => v);
};
export const orElse = /*@__PURE__*/ (m, onNone) => {
    return map(m, onNone, v => some(v));
};
export const okOrElse = /*@__PURE__*/ (m, onNone) => {
    return map(m, () => left(onNone()), v => right(v));
};
//# sourceMappingURL=Maybe.js.map