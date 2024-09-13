import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ReactiveFormsModule } from '@angular/forms';
import { RequestStatus } from '../../../../models/request.status.model';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

  form: any;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  status: RequestStatus = 'init';

  constructor(private formBuilder: FormBuilder) {

    // Inicialización del formulario dentro del constructor
    this.form = this.formBuilder.nonNullable.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [ Validators.required, Validators.minLength(8)]],
    });
    
  }

  doLogin() {
    if(this.form.valid) {
      this.status = 'loading';
    } else {
      this.form.markAllAsTouched();
    }
  }


}
