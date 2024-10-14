"use strict";
/// <reference path="Validation.ts" />
var MultiFileValidation;
(function (MultiFileValidation) {
    const numberRegexp = /^[0-9]+$/;
    class ZipCodeValidator {
        isAcceptable(s) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
    MultiFileValidation.ZipCodeValidator = ZipCodeValidator;
})(MultiFileValidation || (MultiFileValidation = {}));
