import { validateEmail, validatePassword, validateLogin } from '../utils/validation';

it('passes on valid email', () => {
    const inputEmail = "evelinasundin@hotmail.se";
    const testEmail = validateEmail(inputEmail); 
    expect(testEmail).toBeTruthy();

});

it('fails on invalid email', () => {
    const inputEmail = "evelinasundin.se"; 
    const testEmail = validateEmail(inputEmail); 
    expect(testEmail).toBeFalsy();
});

it('validates password: 8 chars, 1 uppercase, 1 digit', () => {
    const password = "hejEvelina5"; 
    const testPassword = validatePassword(password); 
    expect(testPassword).toBeTruthy();
});

it('invalid password: missing digit', () => {
    const password = "hejsanEvelina"; 
    const testPassword = validatePassword(password); 
    expect(testPassword).toBeFalsy();
 
});

it('invalid password: missing 1 uppercase', () => {
    const password = "hejevelina2";
    const testPassword = validatePassword(password); 
    expect(testPassword).toBeFalsy();
});

it('valid password and email', () => {
    const password = "hejEvelina2"; 
    const email = "evelinasundin@hotmail.se"; 
    const testValid = validateLogin(email, password); 
    expect(testValid).toBeTruthy();
});

it('unvalid password and email', () => {
    const password = "hejevelina"; 
    const email = "evelina.se"; 
    const testValid = validateLogin(email, password); 
    expect(testValid).toBeFalsy();
});
