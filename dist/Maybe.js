import { left, right } from "./Either.js";
export const none = /*@__NOINLINE__*/ Object.freeze({ __Maybe_None: 'None' });
// Why NOINLINE? 
// We depends on none === none being true, which is broken if its value is
// duplicated everywhere by the reduce_vars option in terser.
// See: https://github.com/terser/terser?tab=readme-ov-file#annotations
export const some = (t) => {
    return t;
};
export const fromUndefinable = (v) => {
    if (v === undefined) {
        return none;
    }
    return v;
};
export const isNone = (m) => {
    return m === none;
};
export const isSome = (m) => {
    return m !== none;
};
export const map = (m, onNone, onSome) => {
    if (isSome(m)) {
        return onSome(m);
    }
    return onNone();
};
export const mapSome = (m, onSome) => {
    if (isSome(m)) {
        return some(onSome(m));
    }
    return none;
};
export const mapNone = (m, onNone) => {
    if (isNone(m)) {
        return some(onNone());
    }
    return none;
};
export const unwrapOr = (m, onNone) => {
    return map(m, onNone, v => v);
};
export const orElse = (m, onNone) => {
    return map(m, onNone, v => some(v));
};
export const okOrElse = (m, onNone) => {
    return map(m, () => left(onNone()), v => right(v));
};
//# sourceMappingURL=Maybe.js.map