import { none, some } from "./Maybe.js";
export const thenDo = /*@__PURE__*/ (b, onTrue) => {
    if (b) {
        return some(onTrue());
    }
    return none;
};
//# sourceMappingURL=Boolean.js.map