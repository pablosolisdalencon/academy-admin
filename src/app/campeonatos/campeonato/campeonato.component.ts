import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../modules/material/material.module';
import { ApiService } from '../../../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ FormsModule, HttpClientModule ,MaterialModule,RouterModule],
 
  selector: 'app-campeonato', // Cambia el nombre del selector según tu entidad
  templateUrl: './campeonato.component.html', // Asegúrate de tener el archivo HTML correspondiente
  styleUrls: ['./campeonato.component.css'] // Ajusta la ruta al archivo CSS si es necesario
})
export class CampeonatoComponent implements OnInit {
  public id = this.route.snapshot.paramMap.get('id');
  dataCampeonatos: any= {};
  public apiCampeonatos ="";
  dataPartidos: any= {};
  public apiPartidos ="";
  nombre?: string;
  correo?: string;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCampeonato();
    this.getPartidos();
  }

  getCampeonato() {
    this.apiCampeonatos = "campeonatos/" + this.id; // Cambia el nombre de la API según tu entidad
    this.apiService.getData(this.apiCampeonatos).subscribe((response) => {
      this.dataCampeonatos = response.message;
      console.log(this.dataCampeonatos);
    });
  }

  getPartidos() {
    this.apiPartidos = "partidos/"+ this.id; // Cambia el nombre de la API según tu entidad
    this.apiService.getData(this.apiPartidos).subscribe((response) => {
      this.dataPartidos = response.message.data;
      console.log(this.dataPartidos);
    });
  }

  guardar() {
    console.log('Nombre:', this.nombre);
    console.log('Correo:', this.correo);
    // Aquí puedes realizar acciones adicionales, como enviar los datos al servidor
  }
}
