"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getValue() {
    return "Hello";
}
let data = getValue();
data.method(); // allowed — no check
data.prop = 1; // allowed
let s = data; // allowed — implicit any → string
let unknown = getValue();
data.method(); // error: 'unknown' has no known methods
data.prop; // error
let p = data; // error: 'unknown' not assignable to 'string'
// Must narrow first:
if (typeof data === 'string') {
    let s = data; // OK
}
//# sourceMappingURL=any_unknown.js.map