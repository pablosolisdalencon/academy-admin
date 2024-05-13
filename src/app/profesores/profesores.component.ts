import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { MaterialModule } from "../../modules/material/material.module";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-profesores', // Cambia el nombre del selector a 'app-profesores'
  standalone: true,
  imports: [HttpClientModule, MaterialModule], // Asegúrate de importar los módulos necesarios
  templateUrl: './profesores.component.html', // Cambia la ruta del archivo HTML si es necesario
  styleUrls: ['./profesores.component.css'] // Cambia la ruta del archivo CSS si es necesario
})
export class ProfesoresComponent implements OnInit { // Cambia el nombre de la clase a ProfesoresComponent
  data: any = {};
  public api = "";

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getProfesores(); // Cambia el nombre del método a getProfesores
  }

  getProfesores() { // Cambia el nombre del método a getProfesores
    this.api = "profesores"; // Cambia la URL de la API a la correspondiente para profesores
    this.apiService.getData(this.api).subscribe((response) => {
      this.data = response.message.data;
      console.log(this.data);
    });
  }
}
