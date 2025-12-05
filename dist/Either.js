import { none, some, isSome } from "./Maybe.js";
const _l = 0;
const _r = 1;
export /*@__INLINE__*/ const left = (value) => {
    return [some(value), none];
};
export /*@__INLINE__*/ const right = (value) => {
    return [none, some(value)];
};
export /*@__INLINE__*/ const map = (e, onLeft, onRight) => {
    if (isSome(e[_r])) {
        return onRight(e[_r]);
    }
    return onLeft(e[_l]);
};
export /*@__INLINE__*/ const ok = (e) => {
    if (isSome(e[_r])) {
        return e[_r];
    }
    return none;
};
//# sourceMappingURL=Either.js.map