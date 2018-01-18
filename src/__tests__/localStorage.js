import * as localStorageUtils from '../utils/localStorage';

beforeEach(() =>{
  localStorage.clear();
});

afterEach(() =>{
  localStorage.clear();
});

it('should get the user from localStorage', () => {
  const userEmail = "evelinasundin@hotmail.se"; 
  localStorageUtils.saveUserToLocalStorage(userEmail);
  expect(localStorageUtils.getUserFromLocalStorage()).toBe(userEmail);
});

it('should get empty user from localStorage', () => {
  const userEmail = "evelinasundin@hotmail.se";
  localStorageUtils.removeUserFromLocalStorage(userEmail);
  expect(localStorageUtils.getUserFromLocalStorage()).toBeFalsy();
});

