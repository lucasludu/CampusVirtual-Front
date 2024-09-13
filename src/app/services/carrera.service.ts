import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarreraComboDto } from '../models/carrera.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  constructor(private http : HttpClient) { }

  getAll_InsertNewUser(): Observable<CarreraComboDto[]> {
    return this.http.get<CarreraComboDto[]>(`https://localhost:7096/Carrera/combo`);
  }

}
