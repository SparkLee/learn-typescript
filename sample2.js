/// <reference path="Validation.ts" />
var MultiFileValidation;
(function (MultiFileValidation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    MultiFileValidation.LettersOnlyValidator = LettersOnlyValidator;
})(MultiFileValidation || (MultiFileValidation = {}));
/// <reference path="Validation.ts" />
var MultiFileValidation;
(function (MultiFileValidation) {
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    MultiFileValidation.ZipCodeValidator = ZipCodeValidator;
})(MultiFileValidation || (MultiFileValidation = {}));
/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
// Some samples to try
var stringsMultiFile = ["Hello", "98052", "101"];
// Validators to use
var validatorsMultiFile = {};
validatorsMultiFile["ZIP code"] = new MultiFileValidation.ZipCodeValidator();
validatorsMultiFile["Letters only"] = new MultiFileValidation.LettersOnlyValidator();
// Show whether each string passed each validator
for (var _i = 0, stringsMultiFile_1 = stringsMultiFile; _i < stringsMultiFile_1.length; _i++) {
    var s = stringsMultiFile_1[_i];
    for (var name_1 in validatorsMultiFile) {
        console.log("\"".concat(s, "\" - ").concat(validatorsMultiFile[name_1].isAcceptable(s) ? "matches" : "does not match", " ").concat(name_1));
    }
}
