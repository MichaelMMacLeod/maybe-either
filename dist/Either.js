import { none, some, isSome } from "./Maybe.js";
const _l = 0;
const _r = 1;
export const left = /*@__PURE__*/ (value) => {
    return [some(value), none];
};
export const right = /*@__PURE__*/ (value) => {
    return [none, some(value)];
};
export const map = /*@__PURE__*/ (e, onLeft, onRight) => {
    if (isSome(e[_r])) {
        return onRight(e[_r]);
    }
    return onLeft(e[_l]);
};
export const ok = /*@__PURE__*/ (e) => {
    if (isSome(e[_r])) {
        return e[_r];
    }
    return none;
};
//# sourceMappingURL=Either.js.map