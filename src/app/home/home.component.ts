import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { CategoriasComponent } from '../categorias/categorias.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoriasComponent,MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
