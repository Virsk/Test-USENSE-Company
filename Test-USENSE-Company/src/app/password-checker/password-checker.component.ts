import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CheckerService } from '../../shared/services/checker.service';

@Component({
  selector: 'app-password-checker',
  templateUrl: './password-checker.component.html',
  styleUrls: ['./password-checker.component.scss']
})
export class PasswordCheckerComponent {
  circles: string[] = ['grey', 'grey', 'grey']
  password: string = '';

  constructor(private _checkerService: CheckerService) { }

  checkPasswordStrength() {
    this.circles = this._checkerService.checkPassword(this.password)
  }
}
