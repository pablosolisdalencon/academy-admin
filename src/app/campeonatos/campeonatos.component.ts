import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { MaterialModule } from "../../modules/material/material.module";
import { HttpClientModule } from '@angular/common/http';

import { routes } from '../app.routes';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-campeonatos', // Cambia el nombre del selector según tu entidad
  templateUrl: './campeonatos.component.html', // Asegúrate de tener el archivo HTML correspondiente
  styleUrls: ['./campeonatos.component.css'], // Ajusta la ruta al archivo CSS si es necesario
  imports: [ HttpClientModule ,MaterialModule,RouterModule]
})
export class CampeonatosComponent implements OnInit {
  data: any = {};
  public api = 'campeonatos'; // Cambia el nombre de la API según tu entidad

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getCampeonatos();
  }

  getCampeonatos() {
    this.apiService.getData(this.api).subscribe((response) => {
      this.data = response.message.data;
      console.log(this.data);
      // Aquí puedes realizar más acciones con los datos obtenidos
    });
  }
}
