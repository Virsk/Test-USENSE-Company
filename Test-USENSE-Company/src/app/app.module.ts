import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordCheckerComponent } from './password-checker/password-checker.component';
import { PasswordInputComponent } from './password-checker/password-input/password-input.component';
import { PasswordStrengthComponent } from './password-checker/password-strength/password-strength.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordCheckerComponent,
    PasswordInputComponent,
    PasswordStrengthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
