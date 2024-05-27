import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../../modules/material/material.module';
import { ApiService } from '../../../../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ FormsModule, HttpClientModule ,MaterialModule,RouterModule],
  selector: 'app-partido', // Cambia el nombre del selector según tu entidad
  templateUrl: './partido.component.html', // Asegúrate de tener el archivo HTML correspondiente
  styleUrls: ['./partido.component.css'] // Ajusta la ruta al archivo CSS si es necesario
})
export class PartidoComponent implements OnInit {
  public id = this.route.snapshot.paramMap.get('id');
  dataPartidos: any = {};
  public apiPartidos = ""; 
  dataNominas: any = {};
  public apiNominas = ""; 

  nombre?: string;
  correo?: string;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getPartidos();
  }

  getPartidos() {
    this.apiPartidos = "partidos/" + this.id; // Cambia el nombre de la API según tu entidad
    this.apiService.getData(this.apiPartidos).subscribe((response) => {
      this.dataPartidos = response.message.data;
      console.log(this.dataPartidos);
    });
  }
    getNominas() {
      this.apiNominas = "nominas/" + this.id; // Cambia el nombre de la API según tu entidad
      this.apiService.getData(this.apiNominas).subscribe((response) => {
        this.dataNominas = response.message.data;
        console.log(this.dataNominas);
      });
  }

  guardar() {
    console.log('Nombre:', this.nombre);
    console.log('Correo:', this.correo);
    // Aquí puedes realizar acciones adicionales, como enviar los datos al servidor
  }

}