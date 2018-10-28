import { AbstractControl, ValidatorFn, FormGroup } from "@angular/forms";
//@1
export function validateNumber(control: AbstractControl) {
    if (parseInt(control.value) == 111) {
        return null;
    } else {
        return { 'number1': true }
    }
}
//@2
export function ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value == undefined || control.value.length == 0) return null;

    if ((isNaN(control.value) == undefined || control.value < 18 || control.value > 45)) {
        return { 'age Range': true };
    }
    return null;
}
//@3
export function ageRange(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        if (control.value == undefined || control.value.length == 0) return null;
        if ((isNaN(control.value) || control.value < min || control.value > max)) {
            return { 'ageRange2': true }
        }
        return null;
    }
}
// @4
export class PasswordValidation {
    static MatchPassword(AC: AbstractControl) {
        let password = AC.get('password').value; // to get value in input tag
        let confirmPass = AC.get('confirmPass').value; // to get value in input tag
        if (password != confirmPass) {
            // console.log('false');
            AC.get('confirmPass').setErrors({ MatchPassword: true })
        } else {
            // console.log('true');
            return null
        }
    }
}


