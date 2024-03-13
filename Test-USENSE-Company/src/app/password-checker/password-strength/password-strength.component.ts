import { Component, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CheckerService } from '../../shared/services/checker.service';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
})

export class PasswordStrengthComponent implements OnChanges {
  @Input() password!: string;

  circles: string[] = ['', '', '']

  constructor(private _checkerService: CheckerService) { }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.password.length>8){
      this.circles = this._checkerService.checkPassword(this.password)
    }

  }
  
}
