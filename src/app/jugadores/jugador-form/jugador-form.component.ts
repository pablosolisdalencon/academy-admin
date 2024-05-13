// jugador-form.component.ts

import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../modules/material/material.module';
import { FormsModule } from '../../../modules/forms/forms.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-jugador-form',
  standalone:true,
  templateUrl: './jugador-form.component.html',
  styleUrls: ['./jugador-form.component.css'],
  imports: [FormsModule,MaterialModule]
})
export class JugadorFormComponent implements OnInit {
  jugadorForm!: FormGroup; // Agrega el operador de afirmación de asignación definitiva (!)

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.jugadorForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      rut: ['', Validators.pattern(/^\d{2}\.\d{3}\.\d{3}-\d{1}$/)],
      fecha_nac: [''],
      // Agrega más campos aquí según tus necesidades
    });
  }

  submitForm(): void {
    if (this.jugadorForm!.valid) {
      // Guarda los datos en la base de datos o realiza otras acciones
      console.log(this.jugadorForm!.value);
    }
  }
}
