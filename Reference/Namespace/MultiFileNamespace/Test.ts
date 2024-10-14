/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

// Some samples to try
let stringsMultiFile = ["Hello", "98052", "101"];

// Validators to use
let validatorsMultiFile: { [s: string]: MultiFileValidation.StringValidator } = {};
validatorsMultiFile["ZIP code"] = new MultiFileValidation.ZipCodeValidator();
validatorsMultiFile["Letters only"] = new MultiFileValidation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of stringsMultiFile) {
    for (let name in validatorsMultiFile) {
        console.log(`"${s}" - ${validatorsMultiFile[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
    }
}