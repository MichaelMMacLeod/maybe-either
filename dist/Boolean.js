import { none, some } from "./Maybe.js";
export /*@__INLINE__*/ const thenDo = (b, onTrue) => {
    if (b) {
        return some(onTrue());
    }
    return none;
};
//# sourceMappingURL=Boolean.js.map