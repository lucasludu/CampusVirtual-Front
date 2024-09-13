import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomValidators } from '../../../../utils/validators';
import { RequestStatus } from '../../../../models/request.status.model';
import { CarreraService } from '../../../../services/carrera.service';
import { CarreraComboDto } from '../../../../models/carrera.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './register-form.component.html',
})

export class RegisterFormComponent implements OnInit {

  form : any;
  status : RequestStatus = 'init'
  listaCarrera : CarreraComboDto[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private carreraService: CarreraService,
  ) {
      
    this.form = this.formBuilder.nonNullable.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dni: ['', [Validators.minLength(8), Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
      confirmPassword: ['', [Validators.minLength(8), Validators.required]],
      carrera: ['', [Validators.required]],
      rol: ['', [Validators.required]],
    }, {
      validators: [CustomValidators.MatchValidators('password', 'confirmPassword')]
    });

  }
  

  ngOnInit(): void {
    this.ShowCarrera();
  }

  ShowCarrera() {
    if(this.form.valid) {
      this.status = 'loading';
      this.carreraService.getAll_InsertNewUser()
      .subscribe({
        next: (carreras : CarreraComboDto[]) => {
          this.status = 'success';
          this.listaCarrera = carreras;
        },
        error: () => {
          this.status = 'failed';
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  register() {
    if(this.form.valid) {
      this.status = 'loading';
    } else {
      this.form.markAllAsTouched();
    }
  }
 
}
