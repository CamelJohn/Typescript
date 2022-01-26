// interface StringValidator {
//   isAcceptable(s: string): boolean;
// }

// let lettersRegexp = /^[A-Za-z]+$/;
// let numberRegexp = /^[0-9]+$/;

// class LettersOnlyValidator implements StringValidator {
//   isAcceptable(s: string): boolean {
//     return lettersRegexp.test(s);
//   }
// }

// class ZipCodeValidator implements StringValidator {
//   isAcceptable(s: string): boolean {
//     return s.length === 5 && numberRegexp.test(s);
//   }
// }

// // ? Examples
// let stringArray = ['Hello', '98052', "101"];
// let validatorsObject: { [s: string]: StringValidator } = {};
// validatorsObject["ZIPCODE"] = new ZipCodeValidator();
// validatorsObject["LETTERS"] = new LettersOnlyValidator();

// for (let s of stringArray) {
//   for (let name in validatorsObject) {
//     let isMatch = validatorsObject[name].isAcceptable(s);
//     console.log(`'${s}' ${isMatch ? 'matches' : 'does not match'} '${name}.`)
//   }
// }
