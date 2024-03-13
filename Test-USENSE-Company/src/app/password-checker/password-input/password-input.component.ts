import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

  @Component({
    selector: 'app-password-input',
    templateUrl: './password-input.component.html',
    styleUrls: ['./password-input.component.scss'],
    providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true
    }]
  })
export class PasswordInputComponent implements ControlValueAccessor {
  constructor() { }
  onChange: any = () => { }
  onTouch: any = () => { }
  val = "" // this is the updated value that the class accesses
  set value(val: string) {  // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    this.val = val
    this.onChange(val)
    this.onTouch(val)
    }
    writeValue(value: any) {
      this.value = value
    }
    // upon UI element value changes, this method gets triggered
    registerOnChange(fn: any) {
      this.onChange = fn
    }
    // upon touching the element, this method gets triggered
    registerOnTouched(fn: any) {
      this.onTouch = fn
    }
}
