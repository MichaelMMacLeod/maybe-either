import { left, right } from "./Either.js";
import { none, some } from "./Maybe.js";
export const thenDo = (b, onTrue) => {
    if (b) {
        return some(onTrue());
    }
    return none;
};
export const map = (b, onFalse, onTrue) => {
    if (b) {
        return right(onTrue());
    }
    return left(onFalse());
};
//# sourceMappingURL=Boolean.js.map