"use strict";
/// <reference path="Validation.ts" />
var MultiFileValidation;
(function (MultiFileValidation) {
    const lettersRegexp = /^[A-Za-z]+$/;
    class LettersOnlyValidator {
        isAcceptable(s) {
            return lettersRegexp.test(s);
        }
    }
    MultiFileValidation.LettersOnlyValidator = LettersOnlyValidator;
})(MultiFileValidation || (MultiFileValidation = {}));
