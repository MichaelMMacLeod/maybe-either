import { none, some, isSome } from "./Maybe.js";
const _l = 0;
const _r = 1;
export const left = (value) => {
    return [some(value), none];
};
export const right = (value) => {
    return [none, some(value)];
};
export const isLeft = (e) => {
    return isSome(e[_l]);
};
export const isRight = (e) => {
    return isSome(e[_r]);
};
export const map = (e, onLeft, onRight) => {
    if (isSome(e[_r])) {
        return onRight(e[_r]);
    }
    return onLeft(e[_l]);
};
export const mapLeft = (e, onLeft) => {
    if (isSome(e[_l])) {
        return left(onLeft(e[_l]));
    }
    return e;
};
export const mapRight = (e, onRight) => {
    if (isSome(e[_r])) {
        return right(onRight(e[_r]));
    }
    return e;
};
export const mapLeftAndRight = (e, onLeft, onRight) => {
    if (isSome(e[_r])) {
        return right(onRight(e[_r]));
    }
    return left(onLeft(e[_l]));
};
export const getLeft = (e) => {
    return e[_l];
};
export const getRight = (e) => {
    return e[_r];
};
//# sourceMappingURL=Either.js.map