import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { MaterialModule } from "../../modules/material/material.module";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-campeonatos', // Cambia el nombre del selector a 'app-campeonatos'
  standalone: true,
  imports: [HttpClientModule, MaterialModule], // Asegúrate de importar los módulos necesarios
  templateUrl: './campeonatos.component.html', // Cambia la ruta del archivo HTML si es necesario
  styleUrls: ['./campeonatos.component.css'] // Cambia la ruta del archivo CSS si es necesario
})
export class CampeonatosComponent implements OnInit { // Cambia el nombre de la clase a CampeonatosComponent
  data: any = {};
  public api = "";

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getCampeonatos(); // Cambia el nombre del método a getCampeonatos
  }

  getCampeonatos() { // Cambia el nombre del método a getCampeonatos
    this.api = "campeonatos"; // Cambia la URL de la API a la correspondiente para campeonatos
    this.apiService.getData(this.api).subscribe((response) => {
      this.data = response.message.data;
      console.log(this.data);
    });
  }
}
