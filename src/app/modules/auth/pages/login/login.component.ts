import { Component } from '@angular/core';

import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { ForgotPasswordFormComponent } from '../../components/forgot-password-form/forgot-password-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent, ForgotPasswordFormComponent],
  templateUrl: './login.component.html'
})
export class LoginComponent {

}
