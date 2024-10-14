"use strict";
var Validation;
(function (Validation) {
    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;
    class LettersOnlyValidator {
        isAcceptable(s) {
            return lettersRegexp.test(s);
        }
    }
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    class ZipCodeValidator {
        isAcceptable(s) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
console.log("---------- Namespaced Validators ----------");
// Some samples to try
let strings2 = ["Hello", "98052", "101"];
// Validators to use
let validators2 = {};
validators2["ZIP code"] = new Validation.ZipCodeValidator();
validators2["Letters only"] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (let s of strings2) {
    for (let name in validators2) {
        console.log(`"${s}" - ${validators2[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
    }
}
