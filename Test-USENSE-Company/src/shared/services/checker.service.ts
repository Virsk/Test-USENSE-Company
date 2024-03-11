import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckerService {
  
  checkPassword(password: string): string[] {
    const length = password.length;

    if (length === 0) {
      return ['grey', 'grey', 'grey'];
    }

    if (length < 8) {
      return ['red', 'red', 'red'];
    }

    if (/^[a-zA-Zа-яА-Я]+$/.test(password) || /^[0-9]+$/.test(password) || /^[!@#$%^&*(),.?":{}|<>]+$/.test(password)) {
      return ['red', 'grey', 'grey']
    }

    if (/^[a-zA-Zа-яА-Я0-9]+$/.test(password) || /^[a-zA-Zа-яА-Я!@#$%^&*(),.?":{}|<>]+$/.test(password) || /^[0-9!@#$%^&*(),.?":{}|<>]+$/.test(password)) {
      return ['yellow', 'yellow', 'grey']
    }

    return ['green', 'green', 'green']
  }

}


