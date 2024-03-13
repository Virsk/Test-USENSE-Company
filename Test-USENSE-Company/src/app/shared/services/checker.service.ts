import { Injectable } from '@angular/core';
import { regex } from '../constants/regex';

@Injectable({
  providedIn: 'root'
})
export class CheckerService {
  
  checkPassword(password: string): string[] {
    
    if (regex.onlyLetters.test(password) || regex.onlyDigits.test(password) || regex.onlySymbols.test(password)){
      return ['red', 'grey', 'grey']
    }

    if (regex.lettersAndDigits.test(password) || regex.lettersAndSymbols.test(password) || regex.digitsAndSymbols.test(password)) {
      return ['yellow', 'yellow', 'grey']
    }

    return ['green', 'green', 'green']
  }

}


